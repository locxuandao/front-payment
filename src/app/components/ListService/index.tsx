import classNames from "classnames/bind";

import styles from "./ListService.module.scss";
// eslint-disable-next-line @typescript-eslint/no-redeclare
import { Add, Wallet, History } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const cx = classNames.bind(styles);

export const ListService = () => {
  const navigate = useNavigate();
  const handleNavigateWallet = useCallback(() => {
    navigate("/dich-vu/vi");
  }, [navigate]);

  const handleNavigateChat = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const handleNavigateHistory = useCallback(() => {
    navigate("/dich-vu/lich-su");
  }, [navigate]);
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>Các chức năng dịch vụ</div>
      <div className={cx("listService")}>
        <div className={cx("part")} onClick={handleNavigateChat}>
          <Add className={cx("icon")} />
          <Typography component="p">Tạo giao dịch</Typography>
        </div>
        <div className={cx("part")} onClick={handleNavigateHistory}>
          <History className={cx("icon")} />
          <Typography component="p">Lịch sử</Typography>
        </div>
        <div className={cx("part")} onClick={handleNavigateWallet}>
          <Wallet className={cx("icon")} />
          <Typography component="p">Ví</Typography>
        </div>
      </div>
    </div>
  );
};
