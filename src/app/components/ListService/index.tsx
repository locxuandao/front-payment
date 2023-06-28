import classNames from "classnames/bind";

import styles from "./ListService.module.scss";
// eslint-disable-next-line @typescript-eslint/no-redeclare
import { Add, Wallet, History } from "@mui/icons-material";
import { Typography } from "@mui/material";

const cx = classNames.bind(styles);

export const ListService = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>Các chức năng dịch vụ</div>
      <div className={cx("listService")}>
        <div className={cx("part")}>
          <Add className={cx("icon")} />
          <Typography component="p">Tạo giao dịch</Typography>
        </div>
        <div className={cx("part")}>
          <History className={cx("icon")} />
          <Typography component="p">Lịch sử</Typography>
        </div>
        <div className={cx("part")}>
          <Wallet className={cx("icon")} />
          <Typography component="p">Ví</Typography>
        </div>
      </div>
    </div>
  );
};
