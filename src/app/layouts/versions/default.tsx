import { Route, Routes } from "react-router-dom";
import { ServicePage } from "app/pages/ServicePage";
import { Guards } from "app/pages/Guards";
import { withAppHeader } from "../hocs";

const Pages = {
  Guards: Guards,
  ServicePage: withAppHeader(ServicePage),
};

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Guards />}></Route>
      <Route path="/dich-vu" element={<Pages.ServicePage />}></Route>
    </Routes>
  );
};

export default Layout;
