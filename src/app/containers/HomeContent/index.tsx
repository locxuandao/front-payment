import classNames from "classnames/bind";

import styles from "./HomeContent.module.scss";
import { HomeIntroduce } from "app/components/HomeIntroduce";
import { HomeAbout } from "app/components/HomeAbout";
import { HomeApp } from "app/components/HomeApp";
import { HomeTab } from "app/components/HomeTab";
import { HomePartner } from "app/components/HomePartner";

const cx = classNames.bind(styles);

export const HomeContent = () => {
  return (
    <div className={cx("container")}>
      <HomeIntroduce />
      <HomeAbout />
      <HomeApp />
      <HomeTab />
      <HomePartner />
    </div>
  );
};
