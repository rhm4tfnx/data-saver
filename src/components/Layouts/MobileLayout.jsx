import { Outlet } from "react-router-dom";
import Header from "../Elements/Header";

const MobileLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-2 sm:px-4">
      <div
        className="
        w-full
        max-w-105
        min-h-screen sm:min-h-187.5
        bg-white
        shadow-2xl
        overflow-hidden
        flex flex-col
        rounded-none sm:rounded-2xl
      "
      >
        <Header>Home</Header>
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MobileLayout;
