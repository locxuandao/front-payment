import { Route, Routes } from "react-router-dom";
import { ServicePage } from "app/pages/ServicePage";
import { WalletPage } from "app/pages/WalletPage";
import { RegisterPage } from "app/pages/RegisterPage";
import { ChatPage } from "app/pages/ChatPage";
import { HomePage } from "app/pages/HomePage";
import { LoginPage } from "app/pages/LoginPage";
import { TransactionPage } from "app/pages/TransactionPage";
import { withAppHeader } from "../hocs";

const Pages = {
  HomePage: withAppHeader(HomePage),
  LoginPage: LoginPage,
  ServicePage: withAppHeader(ServicePage),
  WalletPage: withAppHeader(WalletPage),
  RegisterPage: RegisterPage,
  ChatPage: ChatPage,
  TransactionPage: TransactionPage,
};

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.HomePage />}></Route>
      <Route path="/dang-nhap" element={<Pages.LoginPage />}></Route>
      <Route path="/dich-vu" element={<Pages.ServicePage />}></Route>
      <Route path="/dich-vu/vi" element={<Pages.WalletPage />}></Route>
      <Route path="/dang-ki" element={<Pages.RegisterPage />}></Route>
      <Route path="/chat" element={<Pages.ChatPage />}></Route>
      <Route
        path="/dich-vu/lich-su"
        element={<Pages.TransactionPage />}
      ></Route>
    </Routes>
  );
};

export default Layout;
