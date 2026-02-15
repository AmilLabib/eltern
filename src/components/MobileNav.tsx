import { NavLink, useNavigate } from "react-router-dom";
import { Home as HomeIcon, Settings as GearIcon } from "lucide-react";

export default function MobileNav() {
  const navigate = useNavigate();

  const NavItem = ({
    to,
    label,
    icon,
  }: {
    to: string;
    label: string;
    icon: React.ReactNode;
  }) => (
    <NavLink key={to} to={to} className="flex-1">
      {({ isActive }) => (
        <button
          aria-label={label}
          className={`w-full flex flex-col items-center justify-center py-2 ${isActive ? "text-primary" : "text-gray-400"}`}
        >
          {icon}
          <div className="mt-1 text-sm">{label}</div>
        </button>
      )}
    </NavLink>
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden">
      <div className="max-w-md mx-auto grid grid-cols-3 items-end px-4 py-2">
        <div className="flex justify-center">
          <NavItem to="/home" label="Home" icon={<HomeIcon size={18} />} />
        </div>

        <div className="flex justify-center -mt-6">
          <button
            aria-label="eltern"
            onClick={() => navigate("/features")}
            className="bg-primary rounded-full p-3 shadow-lg text-white flex items-center justify-center"
          >
            <img src="/logo-white.png" alt="eltern" className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center">
          <NavItem
            to="/settings"
            label="Settings"
            icon={<GearIcon size={18} />}
          />
        </div>
      </div>
    </nav>
  );
}
