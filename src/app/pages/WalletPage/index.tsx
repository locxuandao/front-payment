import { Helmet } from "react-helmet-async";
import { WalletWrapper } from "app/containers/WalletWrapper";

export const WalletPage = () => {
  return (
    <>
      <Helmet>
        <title>Ví</title>
      </Helmet>
      <WalletWrapper />
    </>
  );
};
