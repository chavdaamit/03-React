import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
