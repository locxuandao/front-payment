import classNames from "classnames/bind";
import { Grid } from "@mui/material";
import { Logo } from "app/components/Logo";

import styles from "./HeaderWrapper.module.scss";

const cx = classNames.bind(styles);

export const HeaderWrapper = () => {
  return (
    <Grid className={cx("container")} container>
      <Grid className={cx("grid-item", "logoWrapper")} item xs>
        <Logo className={cx("logo")} />
      </Grid>
    </Grid>
  );
};
