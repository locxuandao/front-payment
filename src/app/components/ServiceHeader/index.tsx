import classNames from "classnames/bind";
import { Avatar } from "@mui/material";
import Tippy from "@tippyjs/react/headless";
import { Explore, Info, Logout, Settings } from "@mui/icons-material";

import styles from "./Service.modul.scss";
import { getTokens, removeItemFromStorage } from "utils/storage";
import { useCallback } from "react";

const cx = classNames.bind(styles);

export const ServiceHeader = () => {
  const { userInfo } = getTokens();

  const handleLogout = useCallback(() => {
    removeItemFromStorage("tokens");
    window.location.href = "/";
  }, []);
  return (
    <div className={cx("container")}>
      <div className={cx("avatar")}>
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
                  <div className={cx("name")}>{userInfo?.name}</div>
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
              <div className={cx("description")}>
                <span className={cx("descItem")}>Privacy</span>
                <span className={cx("descItem")}>-</span>
                <span className={cx("descItem")}>Terms</span>
                <span className={cx("descItem")}>-</span>
                <span className={cx("descItem")}>Revise © 2023</span>
              </div>
            </div>
          )}
        >
          <div className={cx("avatar")}>
            <Avatar src={userInfo?.avatar} className={cx("avatarIcon")} />
          </div>
        </Tippy>
      </div>
    </div>
  );
};
