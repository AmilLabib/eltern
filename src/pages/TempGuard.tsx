import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Thermometer, Phone, AlertTriangle } from "lucide-react";
import TrendChart, { type TrendPoint } from "../components/TrendChart";

export default function TempGuard() {
  const navigate = useNavigate();
  const temperatureSeries: TrendPoint[] = useMemo(
    () => [
      { label: "02:00", value: 37.2, note: "Normal" },
      { label: "06:00", value: 37.8, note: "Ringan" },
      { label: "10:00", value: 38.3, note: "Waspada" },
      { label: "14:00", value: 38.9, note: "Demam" },
      { label: "18:00", value: 38.6, note: "Menurun" },
      { label: "22:00", value: 38.1, note: "Stabil" },
    ],
    [],
  );
  const latestTemp = temperatureSeries[temperatureSeries.length - 1];
  return (
    <div className="space-y-6">
      {/* header */}
      <div className="flex flex-col gap-3 rounded-2xl bg-primary text-white px-4 py-4 shadow-md md:flex-row md:items-center md:justify-between">
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

      <div className="grid gap-4 lg:grid-cols-[minmax(0,360px)_1fr]">
        <div className="space-y-4">
          <div className="rounded-2xl bg-red-600/95 text-white px-4 py-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full">
                <AlertTriangle size={16} className="text-white" />
              </div>
              <div className="font-semibold text-base">
                PERINGATAN: Suhu Tubuh Tinggi Terdeteksi!
              </div>
            </div>
            <p className="mt-3 text-sm text-white/90">
              Sistem akan terus memantau hingga suhu turun di bawah 37,5 °C.
            </p>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow">
              <Phone size={16} />
              Hubungi Bantuan Medis
            </button>

            <button
              onClick={() => navigate("/analysis")}
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold"
            >
              Lihat Riwayat Suhu
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-md border border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold">
              {latestTemp.value.toFixed(1)} °C
            </div>
            <div className="text-sm text-gray-600">
              Suhu Tubuh Tinggi (Demam)
            </div>
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="text-sm font-medium mb-2">
              Grafik Suhu Tubuh (24 Jam)
            </div>
            <TrendChart data={temperatureSeries} color="#ef4444" unit="°C" />

            <div className="mt-3 text-sm text-gray-700">
              Status: Demam tinggi. Pantau ketat dan hubungi medis jika
              berlanjut. Titik data dapat diketuk untuk melihat nilai detil.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
