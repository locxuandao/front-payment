import { Helmet } from "react-helmet-async";
import { TransactionWrapper } from "app/containers/TransactionWrapper";

export const TransactionPage = () => {
  return (
    <>
      <Helmet>
        <title>Lịch sử giao dịch</title>
      </Helmet>
      <TransactionWrapper />
    </>
  );
};
