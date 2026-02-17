import { Outlet } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";

export default function MainLayout() {
  // Mobile-first layout: single column content centered with safe padding
  // Reserve bottom padding so MobileNav doesn't overlap content
  return (
    <div className="min-h-screen bg-bg pb-24 md:pb-16 lg:pb-10">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <DesktopNav />
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
}
