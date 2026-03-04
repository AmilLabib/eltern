import {
  Activity,
  Thermometer,
  Droplets,
  ShieldAlert,
  HeartPulse,
  Pill,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickStats = [
  {
    label: "Kalori",
    value: "79",
    target: "/500 kcal",
    icon: <Activity className="text-orange-500" size={16} />,
  },
  {
    label: "Langkah",
    value: "1.183",
    target: "/6.000 langkah",
    icon: <TrendingUp className="text-yellow-500" size={16} />,
  },
  {
    label: "Aktif",
    value: "8",
    target: "/30 menit",
    icon: <Activity className="text-blue-500" size={16} />,
  },
];

const features = [
  {
    title: "TempGuard",
    description: "Pantau demam dan lonjakan suhu",
    status: "38.9 °C",
    route: "/temp",
    icon: <Thermometer size={18} className="text-red-500" />,
  },
  {
    title: "OxyTrack",
    description: "Saturasi oksigen harian",
    status: "98% stabil",
    route: "/oxy",
    icon: <Droplets size={18} className="text-emerald-500" />,
  },
  {
    title: "FallGuard",
    description: "Pelacakan jatuh & lokasi",
    status: "Mode darurat aktif",
    route: "/fall",
    icon: <ShieldAlert size={18} className="text-amber-500" />,
  },
  {
    title: "HeartSafe",
    description: "Detak real-time & riwayat",
    status: "95 BPM",
    route: "/heart",
    icon: <HeartPulse size={18} className="text-rose-500" />,
  },
  {
    title: "Pengingat Obat",
    description: "Jadwal dan stok obat",
    status: "Alarm 09:00",
    route: "/meds",
    icon: <Pill size={18} className="text-purple-500" />,
  },
  {
    title: "Asuransi",
    description: "Bandingkan proteksi",
    status: "3 paket aktif",
    route: "/insurance",
    icon: <ShieldCheck size={18} className="text-primary" />,
  },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Perangkat rekomendasi
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              Eltern Care Band
            </h2>
            <p className="text-sm text-gray-600">
              Band pintar yang terhubung langsung dengan semua fitur Eltern.
              Pantau suhu, oksigen, dan detak dari satu perangkat yang nyaman
              dipakai sepanjang hari.
            </p>
            <div className="space-y-1">
              <p className="text-xs uppercase text-gray-400">Harga</p>
              <div className="flex items-baseline gap-3">
                <span className="text-base text-gray-400 line-through">
                  IDR 2.400k
                </span>
                <span className="text-3xl font-bold text-gray-900">
                  IDR 1.200k
                </span>
              </div>
              <span className="inline-flex text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                Diskon 50%
              </span>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white font-semibold shadow"
            >
              Beli Sekarang
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-4 w-full md:w-64 lg:w-72 flex items-center justify-center">
            <img
              src="/product.png"
              alt="Eltern product"
              className="max-h-48 object-contain"
            />
          </div>
        </div>
      </section>

      <header className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase text-gray-400">Selasa, 17 Feb</p>
            <h1 className="text-3xl font-semibold text-gray-900">Health</h1>
          </div>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500">
            +
          </button>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-white to-white border border-primary/10 p-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase text-primary font-semibold">
              Vitality score
            </p>
            <div className="text-3xl font-bold text-gray-900">74</div>
            <p className="text-xs text-gray-500">Naik 6 poin minggu ini</p>
          </div>
          <div className="w-32 h-32 rounded-[24px] bg-white/70 border border-white flex items-center justify-center relative">
            <div className="w-24 h-24 rounded-full bg-primary/20" />
            <Activity className="absolute text-primary" size={24} />
          </div>
        </div>
      </header>

      <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-100 p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <p className="text-xs uppercase text-gray-400">{stat.label}</p>
                <div className="text-xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <p className="text-xs text-gray-500">{stat.target}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link
            to={feature.route}
            key={feature.title}
            className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-primary/60 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{feature.title}</p>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">{feature.status}</div>
          </Link>
        ))}
      </section>

      <Link
        to="/features"
        className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white px-4 py-3 text-sm font-semibold text-primary"
      >
        Manage health features
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
