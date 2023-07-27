import classNames from "classnames/bind";
import { LoginForm } from "app/components/LoginForm";
import logoImg from "assets/images/logo.png";
import { LoginFormModel } from "types/Authentication";
import { useLogin } from "mutations/auth";
import { setTokens } from "utils/storage";

import styles from "./LoginWrapper.module.scss";
import { enqueueSnackbar } from "notistack";
import { useCallback } from "react";
import { Typography } from "@mui/material";

const cx = classNames.bind(styles);

export const LoginWrapper = () => {
  const { mutateAsync } = useLogin();
  const handleLogin = useCallback((data: LoginFormModel) => {
    (async () => {
      try {
        await mutateAsync({
          username: data.username,
          password: data.password,
        });
        setTokens(data);
        window.location.reload();
      } catch (error) {
        enqueueSnackbar("Sai tên đăng nhập,mật khẩu", {
          variant: "warning",
        });
      }
    })();
  }, []);
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>
        <img src={logoImg} alt="logo" className={cx("logoImg")} />
        <Typography className={cx("title")}>Spayment</Typography>
      </div>
      <LoginForm onLoginFrame={handleLogin} />
    </div>
  );
};
