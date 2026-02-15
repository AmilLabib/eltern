import { Outlet } from "react-router-dom";
import MobileNav from "../components/MobileNav";

export default function MainLayout() {
  // Mobile-first layout: single column content centered with safe padding
  // Reserve bottom padding so MobileNav doesn't overlap content
  return (
    <div className="min-h-screen bg-bg pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
}
