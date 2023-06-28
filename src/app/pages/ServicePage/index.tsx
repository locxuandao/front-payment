import { Helmet } from "react-helmet-async";
import { ServiceWrapper } from "app/containers/ServiceWrapper";

export const ServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Dịch vụ - giao dịch trung gian</title>
      </Helmet>
      <ServiceWrapper />
    </>
  );
};
