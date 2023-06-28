import classNames from "classnames/bind";

import styles from "./ServiceWrapper.module.scss";
import { ListService } from "app/components/ListService";
import { Aboutservice } from "app/components/AboutService";

const cx = classNames.bind(styles);

export const ServiceWrapper = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("slider")}></div>
      <ListService />
      <Aboutservice />
    </div>
  );
};
