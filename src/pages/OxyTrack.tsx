import { useNavigate } from "react-router-dom";
import { Activity, Bell } from "lucide-react";

export default function OxyTrack() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-4 bg-bg">
      {/* header */}
      <div className="flex items-center justify-between bg-green-600 text-white px-4 py-3 rounded-md shadow-md">
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

      <div className="mt-6">
        <div className="rounded-full w-56 h-56 mx-auto bg-primary/90 flex items-center justify-center text-white shadow-lg">
          <div className="text-4xl font-bold">98%</div>
          <div className="text-sm">SpO2</div>
        </div>

        <div className="mt-6 rounded-xl bg-white p-4 shadow-md">
          <div className="text-sm font-medium mb-2">
            Grafik Oksigen (24 Jam)
          </div>
          <div className="w-full h-36 bg-gray-50 rounded-md flex items-center justify-center">
            <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
              <rect width="220" height="90" rx="8" fill="#fff" />
              <path
                d="M10 40 C40 30, 70 35, 100 28 C130 22, 160 30, 190 25"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="mt-3 text-sm text-gray-700">
            Status: Pernapasan Stabil. Tidak ada peringatan.
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={() => navigate("/analysis")}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            Lihat Riwayat Lengkap
          </button>
          <button className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold">
            Pengaturan Alarm
          </button>
        </div>
      </div>
    </div>
  );
}
