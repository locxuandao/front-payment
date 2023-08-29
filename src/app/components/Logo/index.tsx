import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import styles from "./Logo.module.scss";
import logoIcon from "assets/images/logo.png";
import { Typography } from "@mui/material";

const cx = classNames.bind(styles);

interface Props {
  className?: string;
}

export const Logo = (props: Props) => {
  const navigate = useNavigate();
  const handleNavigateHome = useCallback(() => {
    navigate(`/`);
  }, [navigate]);
  const { className } = props;
  return (
    <div className={(cx("container"), className)} onClick={handleNavigateHome}>
      <div className={cx("content")}>
        <img src={logoIcon} alt="logo" className={cx("icon")} />
        <Typography className={cx("title")}>Spayment</Typography>
      </div>
    </div>
  );
};
