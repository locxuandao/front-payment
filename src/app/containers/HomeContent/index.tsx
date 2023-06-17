import classNames from "classnames/bind";

import styles from "./HomeContent.module.scss";

const cx = classNames.bind(styles);

export const HomeContent = () => {
  return <div className={cx("container")}>home</div>;
};
