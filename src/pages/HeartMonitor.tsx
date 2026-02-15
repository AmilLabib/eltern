import { Heart, Bell } from "lucide-react";

export default function HeartMonitor() {
  return (
    <div className="min-h-screen bg-[#f3f7fb] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <Heart size={18} className="text-white" />
              </div>
              <h1 className="text-white font-semibold text-lg">
                HeartSafe Monitor
              </h1>
            </div>
            <button aria-label="notifications" className="text-white/90">
              <Bell size={18} className="text-white/90" />
            </button>
          </div>

          <div className="p-5 space-y-4">
            <div className="rounded-lg bg-red-100 border border-red-300 p-3 flex gap-3 items-start">
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

            <div className="bg-white rounded-xl p-4 shadow-sm">
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
                <div className="text-sm text-gray-400">&nbsp;</div>
              </div>

              <div className="mt-4">
                {/* simple ECG-like SVG */}
                <div className="w-full h-28 bg-gradient-to-b from-white to-red-50 rounded-lg p-2">
                  <svg viewBox="0 0 200 60" className="w-full h-full">
                    <defs>
                      <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#fef2f2" />
                        <stop offset="100%" stopColor="#fff" />
                      </linearGradient>
                    </defs>
                    <rect
                      x="0"
                      y="0"
                      width="200"
                      height="60"
                      fill="url(#g)"
                      rx="6"
                    />
                    <path
                      d="M0 40 L30 40 L38 24 L46 40 L56 10 L64 40 L90 40 L98 26 L106 40 L140 40 L148 32 L156 40 L200 40"
                      stroke="#ef4444"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="176" cy="38" r="2.5" fill="#ef4444" />
                  </svg>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <button className="w-full h-12 bg-red-500 text-white rounded-lg flex items-center justify-center gap-2 font-semibold">
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

                <button className="w-full h-12 border border-blue-200 text-blue-600 rounded-lg bg-white font-medium">
                  Lihat Riwayat
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 text-center">
                Suhu Tubuh
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                Kadar Oksigen
              </div>
            </div>
          </div>

          {/* Mobile nav is provided globally by MainLayout -> MobileNav */}
        </div>
      </div>
    </div>
  );
}
