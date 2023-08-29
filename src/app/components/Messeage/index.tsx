import classNames from "classnames/bind";
import { Typography } from "@mui/material";
import { format } from "timeago.js";

import styles from "./Messeage.module.scss";

const cx = classNames.bind(styles);

interface Props {
  own?: Boolean;
  messeage: any;
}

export const Messeage = (props: Props) => {
  const { own, messeage } = props;
  return (
    <div className={own ? cx("container", "own") : cx("container")}>
      <div className={cx("messeageTop")}>
        <Typography className={cx("textMesseage")} component="p">
          {messeage?.text}
        </Typography>
      </div>
      <Typography className={cx("messeageBottom")} component="p">
        {format(messeage?.created_at)}
      </Typography>
    </div>
  );
};
