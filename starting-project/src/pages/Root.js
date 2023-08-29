import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

//컴포넌트니까 함수형태로만들어줌
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
