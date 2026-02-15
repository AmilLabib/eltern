import { useNavigate } from "react-router-dom";
import {
  Thermometer,
  Activity,
  AlertTriangle,
  Heart,
  BarChart2,
} from "lucide-react";

export default function Features() {
  const nav = useNavigate();

  const features = [
    { to: "/temp", label: "TempGuard", icon: <Thermometer size={20} /> },
    { to: "/oxy", label: "OxyTrack", icon: <Activity size={20} /> },
    { to: "/fall", label: "FallGuard", icon: <AlertTriangle size={20} /> },
    { to: "/heart", label: "HeartSafe", icon: <Heart size={20} /> },
    { to: "/analysis", label: "Data Analysis", icon: <BarChart2 size={20} /> },
  ];

  return (
    <div className="min-h-screen p-4 bg-bg">
      <div className="bg-white rounded-xl p-4 shadow-sm max-w-md mx-auto">
        <h2 className="text-lg font-semibold">Features</h2>
        <p className="text-sm text-text mt-2">
          Akses cepat ke seluruh fitur monitor.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {features.map((f) => (
            <button
              key={f.to}
              onClick={() => nav(f.to)}
              className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md"
            >
              <div className="p-2 bg-primary/10 rounded-md text-primary">
                {f.icon}
              </div>
              <div className="text-sm font-medium">{f.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
