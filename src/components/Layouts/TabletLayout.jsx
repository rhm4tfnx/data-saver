import { Outlet } from "react-router-dom";
import Header from "../Elements/Header";

const TabletLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4">
      <div
        className="
          w-full
          max-w-3xl
          min-h-screen
          bg-white
          shadow-xl
          flex flex-col
          rounded-xl
        "
      >
        <Header>Home</Header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default TabletLayout;
