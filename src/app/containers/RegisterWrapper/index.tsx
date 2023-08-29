import classNames from "classnames/bind";
import { useRegister } from "mutations/auth";
import { RegisterFormModel } from "types/Authentication";
import logoImg from "assets/images/logo.png";
import { RegisterForm } from "app/components/RegisterForm";

import styles from "./RegisterWrapper.module.scss";
import { useCallback } from "react";
import { enqueueSnackbar } from "notistack";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export const RegisterWrapper = () => {
  const { mutateAsync } = useRegister();
  const navigate = useNavigate();

  const handleNavigateHome = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  const handleRegister = useCallback((data: RegisterFormModel) => {
    (async () => {
      try {
        await mutateAsync({
          username: data.username,
          password: data.password,
          email: data.email,
          number_phone: data.number_phone,
        });

        enqueueSnackbar("Đăng kí thành công !", { variant: "success" });
        navigate(`/`);
      } catch (error) {
        enqueueSnackbar("Đăng kí thất bại", {
          variant: "warning",
        });
      }
    })();
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("heading")} onClick={handleNavigateHome}>
        <img src={logoImg} alt="logo" className={cx("logoImg")} />
        <Typography className={cx("title")}>Spayment</Typography>
      </div>
      <RegisterForm onRegisterFrame={handleRegister} />
    </div>
  );
};
