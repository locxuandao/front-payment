import { Helmet } from "react-helmet-async";

import { HomeContent } from "app/containers/HomeContent";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Payment - thanh toán trung gian</title>
      </Helmet>
      <HomeContent />
    </>
  );
};
