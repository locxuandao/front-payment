import classNames from "classnames/bind";
import { Tabs, Tab, Box, Typography, Button } from "@mui/material";
import { useCallback, useState } from "react";

import styles from "./HomeTab.module.scss";
import TabImg1 from "assets/images/tab1.png";
import TabImg2 from "assets/images/tab2.png";
import TabImg3 from "assets/images/tab3.png";
import TabImg4 from "assets/images/tab4.png";

const cx = classNames.bind(styles);

interface TabPanelProps {
  className?: string;
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const allyProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const HomeTab = () => {
  const [valueTab, setValueTab] = useState(0);

  const handleChange = useCallback(
    (e: React.SyntheticEvent, newValue: number) => {
      setValueTab(newValue);
    },
    [valueTab],
  );

  return (
    <div className={cx("container")}>
      <Box>
        <div className={cx("header")}>
          <Typography className={cx("heading")}>
            Giải pháp thanh toán tùy biến cho mọi lĩnh vực
          </Typography>
          <Box className={cx("boxTab")}>
            <Tabs
              value={valueTab}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="TMDT-Shop" {...allyProps(0)} />
              <Tab label="Tài chính-bảo hiểm" {...allyProps(1)} />
              <Tab label="Giáo dục" {...allyProps(2)} />
              <Tab label="Du lịch" {...allyProps(3)} />
            </Tabs>
          </Box>
        </div>
        <TabPanel value={valueTab} index={0} className={cx("tabPanel")}>
          <div className={cx("tabWrapper")}>
            <div className={cx("img")}>
              <img src={TabImg1} alt="" className={cx("tabImg")} />
            </div>
            <div className={cx("contentTab")}>
              <Typography className={cx("tabHeading")}>
                Thương mại điện tử - Shop Online
              </Typography>
              <Typography className={cx("tabDes")}>
                Cung cấp giải pháp toàn diện tất cả các phương thức thanh toán
                cho Website và sàn thương mại điện tử
              </Typography>
              <div className={cx("service")}>
                <Typography className={cx("serviceHeading")}>
                  Dịch vụ cung cấp
                </Typography>
                <Button className={cx("button")}>Thu hộ-Chi hộ</Button>
                <Button className={cx("button")}>Cổng thanh toán</Button>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={valueTab} index={1} className={cx("tabPanel")}>
          <div className={cx("tabWrapper")}>
            <div className={cx("img")}>
              <img src={TabImg2} alt="" className={cx("tabImg")} />
            </div>
            <div className={cx("contentTab")}>
              <Typography className={cx("tabHeading")}>
                Tài chính-Bảo hiểm-Cho Vay
              </Typography>
              <Typography className={cx("tabDes")}>
                10+ đối tác là Công ty Tài chính/Bảo hiểm đáng tin cậy sử dụng
                giải pháp của 9Pay để nâng cao chất lượng dịch vụ trong quá
                trình nạp/rút tài khoản
              </Typography>
              <div className={cx("service")}>
                <Typography className={cx("serviceHeading")}>
                  Dịch vụ cung cấp
                </Typography>
                <Button className={cx("button")}>Thu hộ-Chi hộ</Button>
                <Button className={cx("button")}>Cổng thanh toán</Button>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={valueTab} index={2} className={cx("tabPanel")}>
          <div className={cx("tabWrapper")}>
            <div className={cx("img")}>
              <img src={TabImg3} alt="" className={cx("tabImg")} />
            </div>
            <div className={cx("contentTab")}>
              <Typography className={cx("tabHeading")}>Giáo dục</Typography>
              <Typography className={cx("tabDes")}>
                Học sinh/Sinh viên/Phụ huynh có thể dễ dàng tiếp cận và thuận
                tiện thanh toán các khoản học phí
              </Typography>
              <div className={cx("service")}>
                <Typography className={cx("serviceHeading")}>
                  Dịch vụ cung cấp
                </Typography>
                <Button className={cx("button")}>Thu hộ-Chi hộ</Button>
                <Button className={cx("button")}>Cổng thanh toán</Button>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={valueTab} index={3} className={cx("tabPanel")}>
          <div className={cx("tabWrapper")}>
            <div className={cx("img")}>
              <img src={TabImg4} alt="" className={cx("tabImg")} />
            </div>
            <div className={cx("contentTab")}>
              <Typography className={cx("tabHeading")}>Du lịch</Typography>
              <Typography className={cx("tabDes")}>
                Hỗ trợ các website đại lý du lịch trực tuyến,các Công ty Du
                lịch/Lữ hành có thể gia tăng trải nghiệm khách hàng
              </Typography>
              <div className={cx("service")}>
                <Typography className={cx("serviceHeading")}>
                  Dịch vụ cung cấp
                </Typography>
                <Button className={cx("button")}>Thu hộ-Chi hộ</Button>
                <Button className={cx("button")}>Cổng thanh toán</Button>
              </div>
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
};
