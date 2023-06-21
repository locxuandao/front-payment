import classNames from "classnames/bind";

import styles from "./HomeAbout.module.scss";
import { Typography } from "@mui/material";

const cx = classNames.bind(styles);

export const HomeAbout = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("part")}>
        <Typography className={cx("heading")}>300+</Typography>
        <Typography className={cx("des")}>
          Đối tác thanh toáng trong và ngoài nước
        </Typography>
      </div>

      <div className={cx("part")}>
        <Typography className={cx("heading")}>99.9%</Typography>
        <Typography className={cx("des")}>
          Tỷ lệ giao dịch thành công
        </Typography>
      </div>

      <div className={cx("part")}>
        <Typography className={cx("heading")}>50.000 tỷ +</Typography>
        <Typography className={cx("des")}>
          Giá trị giao dịch xử lý hàng năm
        </Typography>
      </div>

      <div className={cx("part")}>
        <Typography className={cx("heading")}>50+</Typography>
        <Typography className={cx("des")}>Ngân hàng đối tác</Typography>
      </div>
    </div>
  );
};
