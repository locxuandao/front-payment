import classNames from "classnames/bind";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

import styles from "./WalletList.module.scss";

import { useGetWalletByOwner } from "queries/wallet";

const cx = classNames.bind(styles);

export const WalletList = () => {
  const { data: wallet } = useGetWalletByOwner();

  return (
    <div className={cx("container")}>
      <div className={cx("walletInfo")}>
        {wallet ? (
          <div className={cx("list")}>
            <div className={cx("heading")}>Thông tin ví</div>
            <div className={cx("frame")}>
              <Typography className={cx("lable")}>
                Tên khách hàng : {wallet?.user?.fullname}
              </Typography>
            </div>
            <div className={cx("frame")}>
              <Typography className={cx("lable")}>
                Tiền cọc : {wallet?.deposit}
              </Typography>
            </div>
            <div className={cx("frame")}>
              <Typography className={cx("lable")}>
                Tiền nợ : {wallet?.debit}
              </Typography>
            </div>
          </div>
        ) : (
          <div className={cx("wrapper")}>
            <Typography className={cx("title")}>
              Bạn chưa có ví vui lòng nạp
            </Typography>
            <Button className={cx("button")}>Nạp</Button>
          </div>
        )}
      </div>
    </div>
  );
};
