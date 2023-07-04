import classNames from "classnames/bind";

import styles from "./WalletWrapper.module.scss";
import { WalletList } from "app/components/WalletList";
import { Aboutservice } from "app/components/AboutService";

const cx = classNames.bind(styles);

export const WalletWrapper = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("slider")}></div>
      <WalletList />
      <Aboutservice />
    </div>
  );
};
