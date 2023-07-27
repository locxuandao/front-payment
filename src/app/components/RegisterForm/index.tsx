import classNames from "classnames/bind";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FormControl, TextField, Button, Typography } from "@mui/material";
import { useCallback } from "react";

import styles from "./RegisterForm.module.scss";
import { RegisterFormModel } from "types/Authentication";

const cx = classNames.bind(styles);

const newRegisterSchema = Yup.object().shape({
  username: Yup.string().trim().required("Bạn chưa nhập tên người dùng"),
  password: Yup.string().trim().required("Bạn chưa nhập mật khẩu"),
  email: Yup.string().email().required("Bạn chưa nhập email"),
  number_phone: Yup.string().trim().required("Bạn chưa nhập số điện thoại"),
});

interface Props {
  onRegisterFrame?: (data: RegisterFormModel) => void;
}

export const RegisterForm = (props: Props) => {
  const { onRegisterFrame = () => {} } = props;

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<RegisterFormModel>({
    resolver: yupResolver(newRegisterSchema),
    defaultValues: {
      username: undefined,
      password: undefined,
      email: undefined,
      number_phone: undefined,
    },
  });

  const handleChangeData = useCallback(
    (data: RegisterFormModel) => {
      onRegisterFrame({ ...data });
    },
    [reset],
  );

  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>
        <Typography className={cx("title")} component="p">
          Đăng Kí
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
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email?.message : ""}
                fullWidth
                margin="dense"
              />
            )}
          />
        </FormControl>

        <FormControl className={cx("formItem")}>
          <Controller
            name="number_phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Số điện thoại"
                variant="outlined"
                error={!!errors.number_phone}
                helperText={errors.number_phone ? errors.email?.message : ""}
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
            Đăng kí
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
