import { NavLink, useNavigate } from "react-router-dom";
import {
  Home as HomeIcon,
  ListChecks,
  Thermometer,
  Activity,
  AlertTriangle,
  Heart,
  BarChart2,
  Pill,
  Settings,
} from "lucide-react";

const navItems = [
  { to: "/home", label: "Beranda", icon: <HomeIcon size={16} /> },
  { to: "/temp", label: "TempGuard", icon: <Thermometer size={16} /> },
  { to: "/oxy", label: "OxyTrack", icon: <Activity size={16} /> },
  { to: "/fall", label: "FallGuard", icon: <AlertTriangle size={16} /> },
  { to: "/heart", label: "HeartSafe", icon: <Heart size={16} /> },
  { to: "/analysis", label: "Data", icon: <BarChart2 size={16} /> },
  { to: "/meds", label: "Pengingat Obat", icon: <Pill size={16} /> },
  { to: "/settings", label: "Pengaturan", icon: <Settings size={16} /> },
];

export default function DesktopNav() {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center justify-between mb-6">
      <button
        onClick={() => navigate("/home")}
        className="flex items-center gap-3"
        aria-label="Kembali ke beranda"
      >
        <div className="w-24 h-24 rounded-2xl flex items-center justify-center">
          <img src="/logo.png" alt="eltern" className="w-24" />
        </div>
      </button>

      <nav className="flex items-center gap-1 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm">
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition ${isActive ? "bg-primary text-white shadow" : "text-gray-600 hover:bg-gray-100"}`
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
