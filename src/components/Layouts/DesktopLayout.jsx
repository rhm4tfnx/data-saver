import { Outlet } from "react-router-dom";
import Header from "../Elements/Header";

const DesktopLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div
        className="
          w-full
          max-w-7xl
          min-h-screen
          bg-white
          shadow-lg
          flex flex-col
        "
      >
        <Header>Home</Header>

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DesktopLayout;
