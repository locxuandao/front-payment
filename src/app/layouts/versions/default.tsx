import { Route, Routes } from "react-router-dom";
import { ServicePage } from "app/pages/ServicePage";
import { Guards } from "app/pages/Guards";
import { WalletPage } from "app/pages/WalletPage";
import { RegisterPage } from "app/pages/RegisterPage";
import { withAppHeader } from "../hocs";

const Pages = {
  Guards: Guards,
  ServicePage: withAppHeader(ServicePage),
  WalletPage: withAppHeader(WalletPage),
  RegisterPage: RegisterPage,
};

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Guards />}></Route>
      <Route path="/dich-vu" element={<Pages.ServicePage />}></Route>
      <Route path="/dich-vu/vi" element={<Pages.WalletPage />}></Route>
      <Route path="/dang-ki" element={<Pages.RegisterPage />}></Route>
    </Routes>
  );
};

export default Layout;
