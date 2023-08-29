import classNames from "classnames/bind";
import { Avatar } from "@mui/material";
import Tippy from "@tippyjs/react/headless";
import { Login, HowToReg, Logout } from "@mui/icons-material";
import { getTokens } from "utils/storage";

import styles from "./Service.modul.scss";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export const ServiceHeader = () => {
  const navigate = useNavigate();
  const { userInfo } = getTokens();

  // const handleLogout = useCallback(() => {
  //   removeItemFromStorage("tokens");
  //   window.location.href = "/";
  // }, []);
  const handleLogin = useCallback(() => {
    navigate(`/dang-nhap`);
  }, [navigate]);

  const handleNavigateRegister = useCallback(() => {
    navigate(`/dang-ki`);
  }, [navigate]);

  return (
    <div className={cx("container")}>
      <div className={cx("avatar")}>
<<<<<<< HEAD
        {userInfo ? (
          <Tippy
            appendTo={document.body}
            placement={"auto"}
            interactive={true}
            trigger={"click"}
            render={attrs => (
              <div className={cx("poperAvatar")} tabIndex={-1} {...attrs}>
                <div className={cx("poper")}>
                  <div className={cx("setting")}>
                    <div className={cx("frame")} onClick={handleLogin}>
                      <Logout className={cx("icon")} />
                      <p>Đăng xuất</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          >
            <div className={cx("avatar")}>
              <Avatar className={cx("avatarIcon")} />
=======
        <Tippy
          appendTo={document.body}
          placement={"bottom-end"}
          interactive={true}
          trigger={"click"}
          render={attrs => (
            <div className={cx("poperAvatar")} tabIndex={-1} {...attrs}>
              <div className={cx("poper")}>
                <div className={cx("profile")}>
                  <Avatar src={userInfo?.avatar} className={cx("avatarIcon")} />
                  <div className={cx("name")}>{userInfo?.username}</div>
                  <div className={cx("email")}>{userInfo?.email}</div>
                </div>
                <div className={cx("setting")}>
                  <div className={cx("frame")}>
                    <Settings className={cx("icon")} />
                    <p>Cài đặt</p>
                  </div>
                  <div className={cx("frame")}>
                    <Explore className={cx("icon")} />
                    <p>Phản hồi & đóng góp ý kiến</p>
                  </div>
                  <div className={cx("frame")}>
                    <Info className={cx("icon")} />
                    <p>Thông tin</p>
                  </div>
                </div>
              </div>
              <div className={cx("logout")} onClick={handleLogout}>
                <Logout className={cx("icon")} />
                <p>Đăng xuất</p>
              </div>
>>>>>>> 762078aae7c3ff62f4efbfca677257878a717287
            </div>
          </Tippy>
        ) : (
          <Tippy
            appendTo={document.body}
            placement={"auto"}
            interactive={true}
            trigger={"click"}
            render={attrs => (
              <div className={cx("poperAvatar")} tabIndex={-1} {...attrs}>
                <div className={cx("poper")}>
                  <div className={cx("setting")}>
                    <div className={cx("frame")} onClick={handleLogin}>
                      <Login className={cx("icon")} />
                      <p>Đăng nhập</p>
                    </div>
                    <div
                      className={cx("frame")}
                      onClick={handleNavigateRegister}
                    >
                      <HowToReg className={cx("icon")} />
                      <p>Đăng kí</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          >
            <div className={cx("avatar")}>
              <Avatar className={cx("avatarIcon")} />
            </div>
          </Tippy>
        )}
      </div>
    </div>
  );
};
