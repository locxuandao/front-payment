import classNames from "classnames/bind";

import styles from "./HomeContent.module.scss";

import { HomeApp } from "app/components/HomeApp";
import { HomeTab } from "app/components/HomeTab";
import { HomePartner } from "app/components/HomePartner";
import { ListService } from "app/components/ListService";
import { Aboutservice } from "app/components/AboutService";
import { HomeIntroduce } from "app/components/HomeIntroduce";

const cx = classNames.bind(styles);

export const HomeContent = () => {
  return (
    <div className={cx("container")}>
      <HomeIntroduce />
      <ListService />
      <Aboutservice />
      <HomeApp />
      <HomeTab />
      <HomePartner />
    </div>
  );
};
