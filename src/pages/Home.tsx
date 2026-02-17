import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-[60vh] flex items-center">
      <div className="w-full bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="text-center md:text-left space-y-4">
            <div>
              <img
                src="/logo.png"
                alt="eltern"
                className="mx-auto md:mx-0 w-28 sm:w-32"
              />
              <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                Platform Pemantauan Kesehatan Keluarga
              </h1>
              <p className="mt-2 text-text text-base">
                TempGuard, OxyTrack, FallGuard, dan HeartSafe kini tampil
                adaptif di layar besar. Pantau seluruh metrik penting dalam satu
                dasbor responsif.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/features"
                className="inline-flex items-center justify-center bg-primary text-white px-5 py-3 rounded-lg font-semibold shadow"
              >
                Lihat Fitur
              </Link>
              <Link
                to="/analysis"
                className="inline-flex items-center justify-center bg-primary/10 text-primary px-5 py-3 rounded-lg font-semibold"
              >
                Ringkasan Data
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-3 rounded-xl bg-gray-50">
                <div className="text-xs text-gray-500">Pengguna Aktif</div>
                <div className="text-2xl font-bold text-gray-900">240+</div>
                <p className="text-xs text-gray-500">Keluarga terhubung</p>
              </div>
              <div className="p-3 rounded-xl bg-gray-50">
                <div className="text-xs text-gray-500">Alert Mingguan</div>
                <div className="text-2xl font-bold text-gray-900">58</div>
                <p className="text-xs text-gray-500">Ditangani tepat waktu</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-white p-6 border border-primary/10 shadow-inner">
              <div className="flex flex-col gap-3 text-sm">
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 shadow">
                  <div className="text-xs text-gray-500">TempGuard</div>
                  <div className="text-2xl font-bold">38.9 °C</div>
                  <p className="text-xs text-red-500 font-semibold">
                    Peringatan demam tinggi
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 shadow">
                  <div className="text-xs text-gray-500">OxyTrack</div>
                  <div className="text-2xl font-bold">98%</div>
                  <p className="text-xs text-emerald-600 font-semibold">
                    Pernapasan stabil
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 shadow">
                  <div className="text-xs text-gray-500">FallGuard</div>
                  <p className="text-sm font-semibold text-gray-800">
                    Lokasi darurat siap dalam peta interaktif
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 w-32 h-32 bg-primary text-white rounded-full flex flex-col items-center justify-center shadow-xl">
              <span className="text-xs uppercase tracking-wide">Status</span>
              <span className="text-2xl font-bold">Aktif</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
