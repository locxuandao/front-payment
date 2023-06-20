import classNames from "classnames/bind";
import { Avatar } from "@mui/material";

import styles from "./Service.modul.scss";

const cx = classNames.bind(styles);

export const ServiceHeader = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("avatar")}>
        <Avatar>S</Avatar>
      </div>
    </div>
  );
};
