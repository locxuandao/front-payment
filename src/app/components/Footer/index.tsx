import classNames from "classnames/bind";
import { Typography } from "@mui/material";
import { Facebook, YouTube, LinkedIn } from "@mui/icons-material";

import styles from "./Footer.module.scss";
import logo from "assets/images/logo.png";

const cx = classNames.bind(styles);

export const Footer = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <div className={cx("info")}>
          <img src={logo} alt="logo" className={cx("logo")} />
          <Typography className={cx("title")}>
            Công ty cổ phần Spayment
          </Typography>
          <Typography className={cx("address")}>
            Địa chỉ : số 93 Tô Hiệu,Nguyễn Trãi,Hà Đông,Hà Nội
          </Typography>
          <div className={cx("contact")}>
            <a>
              <Facebook className={cx("iconContact")} />
            </a>
            <a>
              <YouTube className={cx("iconContact")} />
            </a>
            <a>
              <LinkedIn className={cx("iconContact")} />
            </a>
          </div>
        </div>
        <div className={cx("paymentSolution")}>
          <Typography className={cx("title")}>Giải pháp thanh toán</Typography>
          <Typography className={cx("frameText")}>Thu hộ-Chi hộ</Typography>
          <Typography className={cx("frameText")}>Cổng thanh toán</Typography>
          <Typography className={cx("title")}>Về Spayment</Typography>
          <Typography className={cx("frameText")}>Về chúng tôi</Typography>
          <Typography className={cx("frameText")}>
            Điều khoản sử dụng
          </Typography>
        </div>
        <div className={cx("news")}>
          <Typography className={cx("title")}>Tin tức</Typography>
          <Typography className={cx("frameText")}>Tin tức</Typography>
          <Typography className={cx("frameText")}>Sự kiện</Typography>
          <Typography className={cx("frameText")}>Khuyến mại</Typography>
          <Typography className={cx("frameText")}>Blog</Typography>
        </div>
        <div className={cx("customerCare")}>
          <Typography className={cx("title")}>Chăm sóc khách hàng</Typography>
          <Typography className={cx("subFrame")}>
            Hotline (8h-18h | T2-T7)
          </Typography>
          <Typography className={cx("subText")}>1900 88 68 32</Typography>
          <Typography className={cx("subFrame")}>Email (2h-22h)</Typography>
          <Typography className={cx("subText")}>hotro@spayment.com</Typography>
        </div>

        <div className={cx("business cooperation")}>
          <Typography className={cx("title")}>Hợp tác doanh nghiệp</Typography>
          <Typography className={cx("subFrame")}>Email</Typography>
          <Typography className={cx("subText")}>biz@spayment.com</Typography>
          <Typography className={cx("subFrame")}>Website</Typography>
          <Typography className={cx("subText")}>Slink.asia</Typography>
        </div>
      </div>
      <div className={cx("description")}>
        <Typography className={cx("textDes")}>
          {" "}
          @ 2023 SPayment JSC. All rights reserved
        </Typography>
      </div>
    </div>
  );
};
