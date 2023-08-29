import classNames from "classnames/bind";
import { Typography } from "@mui/material";
import { Person, Home } from "@mui/icons-material";

import styles from "./TransactionWrapper.module.scss";
import { getTokens } from "utils/storage";
import { useGetTransactionByOwner } from "queries/transaction";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const cx = classNames.bind(styles);

export const TransactionWrapper = () => {
  const { userInfo } = getTokens();
  const { data: transactions } = useGetTransactionByOwner();
  const navigate = useNavigate();

  const handleNaavigateHome = useCallback(() => {
    navigate(`/`);
  }, [navigate]);
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <Typography className={cx("title")}>Lịch sử giao dịch</Typography>
        <Typography>
          <Person /> {"  "}
          {userInfo?.name}
        </Typography>
      </div>

      <div className={cx("content")}>
        <div className={cx("homeNavi")} onClick={handleNaavigateHome}>
          <Home className={cx("homeIcon")} />
          <Typography>Quay lại trang chủ</Typography>
        </div>
        <div className={cx("table")}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Người mua</TableCell>
                  <TableCell align="center">Người bán</TableCell>
                  <TableCell align="center">Hàng hóa</TableCell>
                  <TableCell align="center">Tiền giao dịch</TableCell>
                  <TableCell align="center">Số dư nợ</TableCell>
                  <TableCell align="center">Ngày giao dịch</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions?.map(tran => (
                  <TableRow
                    key={tran?._id}
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{tran.buyer?.username}</TableCell>
                    <TableCell align="center">
                      {tran.seller?.username}
                    </TableCell>
                    <TableCell align="center">{tran.goods}</TableCell>
                    <TableCell align="center">
                      {tran?.transaction_money}
                    </TableCell>
                    <TableCell align="center">{tran?.deposit}</TableCell>
                    <TableCell align="center">
                      {" "}
                      {`${moment(tran?.create_at).format(
                        "hh:mm - DD/MM/YYYY",
                      )}`}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className={cx("footer")}>
        <Typography className={cx("textFooter")}>
          @ 2023 SPayment JSC. All rights reserved
        </Typography>
      </div>
    </div>
  );
};
