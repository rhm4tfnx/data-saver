import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileLayout from "./MobileLayout";
import TabletLayout from "./TabletLayout";
import DesktopLayout from "./DesktopLayout";

const ResponsiveLayout = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width < 640) return <MobileLayout />;
  if (width < 1024) return <TabletLayout />;
  return <DesktopLayout />;
};

export default ResponsiveLayout;
