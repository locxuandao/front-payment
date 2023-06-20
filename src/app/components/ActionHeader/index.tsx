import classNames from "classnames/bind";

import styles from "./ActionHeader.module.scss";

const cx = classNames.bind(styles);

export const ActionHeader = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <div className={cx("about", "item")}>Về payment</div>
        <div className={cx("service", "item")}>Dịch vụ</div>
        <div className={cx("enterprise", "item")}>Hợp tác doanh nghiệp</div>
        <div className={cx("help", "item")}>Trợ giúp</div>
        <div className={cx("recruitment", "item")}>Tuyển dụng</div>
      </div>
    </div>
  );
};
