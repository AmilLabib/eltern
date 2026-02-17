import { useMemo } from "react";
import { Heart, Bell } from "lucide-react";
import TrendChart, { type TrendPoint } from "../components/TrendChart";

export default function HeartMonitor() {
  const heartSeries: TrendPoint[] = useMemo(
    () => [
      { label: "00:00", value: 88, note: "Normal" },
      { label: "04:00", value: 90, note: "Normal" },
      { label: "08:00", value: 95, note: "Aktif" },
      { label: "12:00", value: 102, note: "Tinggi" },
      { label: "16:00", value: 98, note: "Stabil" },
      { label: "20:00", value: 93, note: "Turun" },
    ],
    [],
  );
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-blue-600 p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Heart size={20} className="text-white" />
              </div>
              <h1 className="text-white font-semibold text-xl">
                HeartSafe Monitor
              </h1>
            </div>
            <button aria-label="notifications" className="text-white/90">
              <Bell size={20} className="text-white/90" />
            </button>
          </div>
        </div>

        <div className="p-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="rounded-lg bg-red-100 border border-red-300 p-4 flex gap-3 items-start">
              <div className="text-red-700 mt-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21s-6.716-4.35-9.09-6.646C.94 11.968 4.039 6 8.848 6c2.35 0 3.698 1.39 3.152 3.03C11.858 6 13.225 4 15.495 4 20.176 4 23.064 10.11 20.09 14.354 17.468 18.09 12 21 12 21z"
                    fill="#ef4444"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-red-800">
                  Peringatan:
                </div>
                <div className="text-sm text-red-700">
                  Detak Jantung Tidak Normal Terdeteksi!
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Detak Jantung</div>
                  <div className="text-4xl font-bold text-gray-900">
                    95{" "}
                    <span className="text-base font-medium text-gray-500">
                      BPM
                    </span>
                  </div>
                </div>
                <div className="hidden text-sm text-gray-400 md:block">
                  Mode darurat
                </div>
              </div>

              <div className="mt-4">
                <TrendChart data={heartSeries} color="#ef4444" unit=" bpm" />
              </div>

              <div className="mt-4 flex flex-col gap-3 md:flex-row">
                <button className="flex-1 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center gap-2 font-semibold">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.63A2 2 0 014.09 2h3a2 2 0 012 1.72c.12 1.01.38 2 .78 2.94a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.14-1.14a2 2 0 012.11-.45c.94.4 1.93.66 2.94.78A2 2 0 0122 16.92z"
                      stroke="#fff"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Hubungi Bantuan
                </button>

                <button className="flex-1 h-12 border border-blue-200 text-blue-600 rounded-lg bg-white font-medium">
                  Lihat Riwayat
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="bg-white rounded-2xl p-4 border border-red-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-red-500">
                    Suhu Tubuh
                  </p>
                  <div className="text-3xl font-bold text-gray-900">
                    38.9 °C
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-red-50 text-[11px] font-semibold text-red-600">
                  Demam Tinggi
                </span>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                Naik 0.3°C dalam 2 jam terakhir. Sarankan kompres hangat dan
                hidrasi.
              </div>
              <div className="mt-3 h-2 rounded-full bg-red-50">
                <div className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 w-[82%]" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-emerald-500">
                    Kadar Oksigen
                  </p>
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-600">
                  Stabil
                </span>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                Dalam rentang aman untuk aktivitas ringan. Continue monitoring
                setiap 30 menit.
              </div>
              <div className="mt-3 h-2 rounded-full bg-emerald-50">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 w-[95%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
