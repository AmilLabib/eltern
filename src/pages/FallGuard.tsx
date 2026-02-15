export default function FallGuard() {
  return (
    <div className="min-h-screen bg-[#f3f7fb] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11.5L12 4l9 7.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h1 className="text-white font-semibold text-lg">FallShield + Heart Alert</h1>
            </div>
            <button aria-label="notifications" className="text-white/90">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 17H9v-6a3 3 0 10-6 0v1l-1 2v1h20v-1l-1-2v-1a3 3 0 10-6 0v6z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="p-5 space-y-4">
            <div className="rounded-lg bg-red-600/95 border border-red-700 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 14h4v4h-4z" fill="#fff" opacity="0.9" />
                    <path d="M12 2L2 7v6c0 5 6 9 10 9s10-4 10-9V7l-10-5z" stroke="#fff" strokeWidth="0.8" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold">PERINGATAN: JATUH TERDETEKSI!</div>
                  <div className="text-sm">Pola Jantung Tidak Normal. SOS Darurat Dikirim.</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-base font-semibold">Status Saat Ini</div>
              <div className="mt-3 flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-red-600">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12h4l2-6 3 12 2-6h4" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Tidak Bergerak.</div>
                  <div className="text-sm text-gray-700">Detak Jantung: <span className="font-semibold">105 BPM</span> <span className="text-sm text-gray-500">(Meningkat)</span></div>
                </div>
              </div>
            </div>

            <div className="text-center text-gray-700">Panggilan Otomatis dalam <span className="text-red-600 font-semibold">15 detik</span></div>

            <div className="space-y-3">
              <button className="w-full h-12 bg-red-600 text-white rounded-lg flex items-center justify-center gap-2 font-semibold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.12 1.01.38 2 .78 2.94a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.14-1.14a2 2 0 0 1 2.11-.45c.94.4 1.93.66 2.94.78A2 2 0 0 1 22 16.92z" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Kirim SOS Darurat
              </button>

              <button className="w-full h-12 bg-blue-600 text-white rounded-lg font-semibold">
                Batal Alarm
                <div className="text-xs text-white/80">(Saya Baik-Baik Saja)</div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
