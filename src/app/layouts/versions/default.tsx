import { Route, Routes } from "react-router-dom";
import { HomePage } from "app/pages/HomePage";
import { withAppHeader } from "../hocs";

const Pages = {
  HomePage: withAppHeader(HomePage),
};

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.HomePage />}></Route>
    </Routes>
  );
};

export default Layout;
