import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Activity, Bell } from "lucide-react";
import TrendChart, { type TrendPoint } from "../components/TrendChart";

export default function OxyTrack() {
  const navigate = useNavigate();
  const oxySeries: TrendPoint[] = useMemo(
    () => [
      { label: "00:00", value: 97, note: "Normal" },
      { label: "04:00", value: 96, note: "Stabil" },
      { label: "08:00", value: 98, note: "Optimal" },
      { label: "12:00", value: 95, note: "Waspada" },
      { label: "16:00", value: 97, note: "Stabil" },
      { label: "20:00", value: 99, note: "Prima" },
    ],
    [],
  );
  return (
    <div className="space-y-6">
      {/* header */}
      <div className="flex flex-col gap-3 bg-green-600 text-white px-4 py-4 rounded-2xl shadow-md md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-md">
            <Activity size={18} className="text-white" />
          </div>
          <div className="font-semibold text-lg">OxyTrack</div>
        </div>
        <button aria-label="Notifications" className="p-2">
          <Bell size={18} className="text-white" />
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center justify-center">
          <div className="rounded-full w-56 h-56 max-w-full bg-primary/90 flex flex-col items-center justify-center text-white shadow-lg">
            <div className="text-sm uppercase tracking-wide text-white/70">
              SpO2
            </div>
            <div className="text-5xl font-bold">98%</div>
            <div className="text-xs text-white/70 mt-1">Stabil</div>
          </div>

          <div className="mt-6 flex flex-col w-full gap-3">
            <button
              onClick={() => navigate("/analysis")}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
            >
              Lihat Riwayat Lengkap
            </button>
            <button className="w-full bg-gray-200 text-gray-900 py-3 rounded-xl font-semibold">
              Pengaturan Alarm
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-100">
          <div className="text-sm font-medium mb-2">
            Grafik Oksigen (24 Jam)
          </div>
          <TrendChart data={oxySeries} color="#10B981" unit="%" />

          <div className="mt-3 text-sm text-gray-700 flex items-center justify-between">
            <span>Status: Pernapasan Stabil.</span>
            <span className="text-emerald-600 font-semibold">Normal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
