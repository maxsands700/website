import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/NavBar";

export function RootLayout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 flex justify-center items-center pt-4 pb-2">
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
}
