import classNames from "classnames/bind";
import { Logo } from "app/components/Logo";
import { ActionHeader } from "app/components/ActionHeader";
import { ServiceHeader } from "app/components/ServiceHeader";

import styles from "./HeaderWrapper.module.scss";

const cx = classNames.bind(styles);

export const HeaderWrapper = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("logoWrapper")}>
        <Logo className={cx("logo")} />
      </div>
      <div className={cx("actionWrapper")}>
        <ActionHeader />
      </div>
      <div className={cx("serviceWrapper")}>
        <ServiceHeader />
      </div>
    </div>
  );
};
