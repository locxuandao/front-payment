import { Helmet } from "react-helmet-async";

import { LoginWrapper } from "app/containers/LoginWrapper";

export const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Spayment | Login</title>
      </Helmet>
      <LoginWrapper />
    </>
  );
};
