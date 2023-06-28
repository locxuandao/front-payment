import classNames from "classnames/bind";

import styles from "./LoginDecor.module.scss";
import loginbg from "assets/images/loginbg.jpg";

const cx = classNames.bind(styles);

export const LoginDecor = () => {
  return (
    <div className={cx("container")}>
      <img src={loginbg} alt="" />
    </div>
  );
};
