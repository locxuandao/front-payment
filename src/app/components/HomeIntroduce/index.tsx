import classNames from "classnames/bind";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import styles from "./HomeIntroduce.module.scss";

const cx = classNames.bind(styles);

export const HomeIntroduce = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <Typography component="h1" className={cx("heading")}>
          Một kết nối nhanh nhất tới 98 triệu người Việt Nam
        </Typography>

        <Typography component="p" className={cx("description")}>
          Giúp doanh nghiệp và khách hàng của doanh nghiệp nhận - chuyển tiền
          nhanh chóng an toàn
        </Typography>

        <Button className={cx("button")}>Cổng thanh toán</Button>
      </div>
    </div>
  );
};
