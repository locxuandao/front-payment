import classNames from "classnames/bind";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import styles from "./HomeApp.module.scss";
import PayIcon from "assets/images/appimg1.webp";
import CheckIcon from "assets/images/appimg2.webp";
import AppImg from "assets/images/app.png";
import EndowIcon from "assets/images/appimg3.webp";
import ClockIcon from "assets/images/appimg4.webp";

const cx = classNames.bind(styles);

export const HomeApp = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("headerContent")}>
        <Typography component="h1" className={cx("heading")}>
          App điện tử Spayment
        </Typography>
        <Button className={cx("button")}>Tải app ngay</Button>
      </div>
      <div className={cx("content")}>
        <div className={cx("part")}>
          <div className={cx("step")}>
            <img src={PayIcon} alt="payIcon" />
            <Typography className={cx("stepHeading")}>
              Thanh toán đa dạng dịch vụ
            </Typography>
            <Typography className={cx("stepDes")}>
              Nhanh chóng,tiện lơi,an toàn,bảo mật,mọi lúc mọi nơi: điện ,
              nước,internet,..
            </Typography>
          </div>
          <div className={cx("step")}>
            <img src={CheckIcon} alt="checkIcon" />
            <Typography className={cx("stepHeading")}>
              Thao tác đơn giản,thanh toán an toàn
            </Typography>
            <Typography className={cx("stepDes")}>
              Thao tác gọn,lẽ,dễ xử dụng,tiếp cận,đảm bảo sự an toàn khi thanh
              toán
            </Typography>
          </div>
        </div>

        <div className={cx("part")}>
          <img className={cx("appImg")} src={AppImg} alt="appImg" />
        </div>

        <div className={cx("part")}>
          <div className={cx("step")}>
            <img src={EndowIcon} alt="payIcon" />
            <Typography className={cx("stepHeading")}>
              Siêu ưu đãi,mã giảm giá khi thanh toán
            </Typography>
            <Typography className={cx("stepDes")}>
              Ưu đãi cao,nhiều mã giảm giá khi thanh toán,rẻ
            </Typography>
          </div>
          <div className={cx("step")}>
            <img src={ClockIcon} alt="checkIcon" />
            <Typography className={cx("stepHeading")}>
              Nhắc nhở hàng tháng,không lo trễ hạn
            </Typography>
            <Typography className={cx("stepDes")}>
              Thông báo,nhắc nhở thường xuyên tới khách hàng,không lo trễ hạn
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
