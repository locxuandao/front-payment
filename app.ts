import express, { Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import noCache from 'nocache';
import compression from 'compression';
import fs from 'fs';
import http from 'http';
import https from 'https';

import { errorMiddleware } from 'middlewares';
import { APP_CONSTANTS } from 'utils/constants';
// import { logger } from 'utils/logger';
import routers from 'apis';

import initializeResources from 'resources';
import URLParams from 'utils/rest/urlparams';
// import configs from 'configs';

const app = express();

const allowedOrigins = ['http://trunggiangiaodich.vn'];
app.use(cors());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

const privateKey = fs.readFileSync('sslcert/privkey.pem', 'utf8');
const certificate = fs.readFileSync('sslcert/fullchain.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

function initializeSecurity() {
  app.use(noCache());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.xssFilter());
}

function initializeMiddlewares() {
  app.use(express.json());
  app.use(
    compression({
      level: 6,
      threshold: 100 * 1024,
    })
  );

  // use for computing processing time on response
  app.use((request: any, _response: Response, next: NextFunction) => {
    request.startTime = Date.now();
    request.searchParams = request.query as URLParams;
    next();
  });
}

function initializeErrorHandler() {
  app.use(errorMiddleware);
}

initializeSecurity();
initializeMiddlewares();
app.use(APP_CONSTANTS.apiPrefix, routers);
initializeErrorHandler();

export const myListen = () => {
  httpServer.listen(8880, async () => {
    await initializeResources();
    console.log('HTTP server running on port 8880');
  });

  httpsServer.listen(8881, async () => {
    await initializeResources();
    console.log('HTTP server running on port 8881');
  });
};

// export const myListen = async () => {
//   await initializeResources();
//   app.listen(configs.port || 3000, () => {
//     logger.info(`App listening on port ${configs.port || 3000}`);
//   });
// };

export default app;
