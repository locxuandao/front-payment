import classNames from "classnames/bind";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { LoginFormModel } from "types/Authentication";

import styles from "./LoginForm.module.scss";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, TextField, Button, Typography } from "@mui/material";

const cx = classNames.bind(styles);

const newLoginSchema = Yup.object().shape({
  username: Yup.string().trim().required("Bạn chưa nhập tên người dùng"),
  password: Yup.string().trim().required("Bạn chưa nhập mật khẩu"),
});

interface Props {
  onLoginFrame?: (data: LoginFormModel) => void;
}

export const LoginForm = (props: Props) => {
  const { onLoginFrame = () => {} } = props;
  const navigate = useNavigate();

  const handleNavigateRegister = useCallback(() => {
    navigate(`/dang-ki`);
  }, [navigate]);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<LoginFormModel>({
    resolver: yupResolver(newLoginSchema),
    defaultValues: {
      username: undefined,
      password: undefined,
    },
  });

  const handleChangeData = useCallback(
    (data: LoginFormModel) => {
      onLoginFrame({ ...data });
    },
    [reset],
  );

  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>
        <Typography className={cx("title")} component="p">
          Đăng nhập
        </Typography>
      </div>
      <form
        action=""
        onSubmit={handleSubmit(handleChangeData)}
        className={cx("form")}
      >
        <FormControl className={cx("formItem")}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Tên đăng nhập"
                variant="outlined"
                error={!!errors.username}
                helperText={errors.username ? errors.username?.message : ""}
                fullWidth
                margin="dense"
              />
            )}
          />
        </FormControl>

        <FormControl className={cx("formItem")}>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Mật khẩu"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password?.message : ""}
                fullWidth
                margin="dense"
              />
            )}
          />
        </FormControl>

        <FormControl className={cx("formItem")}>
          <Button
            className={cx("btnSubmitForm")}
            onClick={handleSubmit(handleChangeData)}
          >
            Đăng nhập
          </Button>
        </FormControl>

        <FormControl className={cx("formItem")}>
          <Button
            className={cx("btnNavigateRegister")}
            onClick={handleNavigateRegister}
          >
            Đăng kí
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
