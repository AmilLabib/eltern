import { AlertTriangle, Bell } from "lucide-react";

export default function FallGuard() {
  return (
    <div className="min-h-screen p-6 bg-bg">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <AlertTriangle size={18} className="text-white" />
              </div>
              <h1 className="text-white font-semibold text-lg">FallGuard</h1>
            </div>
            <button aria-label="notifications" className="p-2">
              <Bell size={18} className="text-white" />
            </button>
          </div>

          <div className="p-5 space-y-4">
            <div className="rounded-lg bg-red-600/95 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded p-2">
                  <AlertTriangle size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">
                    PERINGATAN: JATUH TERDETEKSI!
                  </div>
                  <div className="text-sm">
                    SOS Darurat dikirim. Hubungi kontak darurat.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-base font-semibold">Status Saat Ini</div>
              <div className="mt-3 flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-red-600">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 12h4l2-6 3 12 2-6h4"
                      stroke="#ef4444"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Tidak Bergerak.</div>
                  <div className="text-sm text-gray-700">
                    Detak Jantung:{" "}
                    <span className="font-semibold">105 BPM</span>{" "}
                    <span className="text-sm text-gray-500">(Meningkat)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
                Hubungi Kontak Darurat
              </button>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold">
                Lihat Riwayat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
