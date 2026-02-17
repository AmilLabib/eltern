import { useNavigate } from "react-router-dom";
import {
  Thermometer,
  Activity,
  AlertTriangle,
  Heart,
  BarChart2,
  Pill,
} from "lucide-react";

export default function Features() {
  const nav = useNavigate();

  const features = [
    { to: "/temp", label: "TempGuard", icon: <Thermometer size={20} /> },
    { to: "/oxy", label: "OxyTrack", icon: <Activity size={20} /> },
    { to: "/fall", label: "FallGuard", icon: <AlertTriangle size={20} /> },
    { to: "/heart", label: "HeartSafe", icon: <Heart size={20} /> },
    { to: "/meds", label: "Pengingat Obat", icon: <Pill size={20} /> },
    { to: "/analysis", label: "Data Analysis", icon: <BarChart2 size={20} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-50">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Semua Fitur Medis
            </h2>
            <p className="text-sm text-text mt-1">
              Pilih modul pemantauan untuk mengecek detail pada layar apa pun.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            {features.length} fitur aktif · responsif desktop
          </div>
        </div>

        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((f) => (
            <button
              key={f.to}
              onClick={() => nav(f.to)}
              className="flex items-center gap-3 p-4 bg-gray-50/70 rounded-2xl border border-gray-100 hover:border-primary/40 hover:bg-white transition shadow-sm"
            >
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                {f.icon}
              </div>
              <div className="text-base font-medium">{f.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
