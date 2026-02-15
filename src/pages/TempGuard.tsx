import { useNavigate } from "react-router-dom";
import { Thermometer, Phone, AlertTriangle } from "lucide-react";

export default function TempGuard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-4 bg-bg">
      {/* header */}
      <div className="flex items-center justify-between bg-primary text-white px-4 py-3 rounded-md shadow-md">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-md">
            <Thermometer size={18} className="text-white" />
          </div>
          <div className="font-semibold text-lg">TempGuard</div>
        </div>
        <button aria-label="Notifications" className="p-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <div className="rounded-xl bg-red-600/95 text-white px-4 py-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <AlertTriangle size={16} className="text-white" />
            </div>
            <div className="font-semibold">
              PERINGATAN: Suhu Tubuh Tinggi Terdeteksi!
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-md">
          <div className="text-center">
            <div className="text-4xl font-bold">38.9 °C</div>
            <div className="text-sm text-gray-600">
              Suhu Tubuh Tinggi (Demam)
            </div>
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="text-sm font-medium mb-2">
              Grafik Suhu Tubuh (24 Jam)
            </div>
            <div className="w-full h-36 bg-gray-50 rounded-md flex items-center justify-center">
              {/* Placeholder sparkline/chart */}
              <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
                <rect width="220" height="90" rx="8" fill="#fff" />
                <path
                  d="M10 60 C40 40, 70 50, 100 35 C130 20, 160 40, 190 30"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M10 70 C40 60, 70 65, 100 55 C130 45, 160 60, 190 50"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.9"
                />
              </svg>
            </div>

            <div className="mt-3 text-sm text-gray-700">
              Status: Demam tinggi. Pantau ketat dan hubungi medis jika
              berlanjut.
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            <Phone size={16} />
            Hubungi Bantuan Medis
          </button>

          <button
            onClick={() => navigate("/analysis")}
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold"
          >
            Lihat Riwayat Suhu
          </button>
        </div>
      </div>
    </div>
  );
}
