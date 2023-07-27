import { Helmet } from "react-helmet-async";
import { RegisterWrapper } from "app/containers/RegisterWrapper";

export const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Spayment | Đăng kí</title>
      </Helmet>
      <RegisterWrapper />
    </>
  );
};
