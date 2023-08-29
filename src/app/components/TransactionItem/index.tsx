import classNames from "classnames/bind";

import styles from "./TransactionItem.module.scss";
import { Typography } from "@mui/material";

const cx = classNames.bind(styles);

interface Props {
  buyer: any;
  seller: any;
  transaction_money: number;
  goods: string;
  deposit: number;
}

export const TransactionItem = (props: Props) => {
  const { buyer, deposit, seller, transaction_money, goods } = props;
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("col")}>
          <Typography className={cx("text")}>Người mua</Typography>
        </div>
        <div className={cx("col")}>
          <Typography className={cx("text")}>Người bán</Typography>
        </div>
        <div className={cx("col")}>
          <Typography className={cx("text")}>Hàng hóa</Typography>
        </div>
        <div className={cx("col")}>
          <Typography className={cx("text")}>Tiền giao dịch</Typography>
        </div>
        <div className={cx("col")}>
          <Typography className={cx("text")}>Số dư nợ</Typography>
        </div>
      </div>

      <div className={cx("header")}>
        <div className={cx("col")}>
          <Typography className={cx("text")}>{buyer?.username}</Typography>
        </div>
        <div className={cx("col")}>
          <Typography className={cx("text")}>{seller?.username}</Typography>
        </div>
        <div className={cx("col")}>
          <Typography className={cx("text")}>{goods}</Typography>
        </div>
        <div className={cx("col")}>
          <Typography className={cx("text")}>{transaction_money}</Typography>
        </div>
        <div className={cx("col")}>
          <Typography className={cx("text")}>{deposit}</Typography>
        </div>
      </div>
    </div>
  );
};
