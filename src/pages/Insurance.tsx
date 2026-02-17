import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Star,
  Clock3,
  Stethoscope,
  CreditCard,
} from "lucide-react";

type InsuranceOption = {
  id: string;
  name: string;
  platform: string;
  premium: string;
  description: string;
  coverage: string[];
  hospitals: number;
  claimTime: string;
  rating: number;
  digitalCard: boolean;
  link: string;
};

const addOns = [
  {
    name: "Telemed 24/7",
    provider: "Halodoc",
    price: "Rp55.000/bln",
    benefit: "Chat dokter umum + spesialis tanpa batas",
  },
  {
    name: "Rawat Jalan Plus",
    provider: "Prudential",
    price: "Rp120.000/bln",
    benefit: "Reimburse obat dan lab hingga Rp2,5 juta/bulan",
  },
  {
    name: "Family Accident",
    provider: "Allianz",
    price: "Rp75.000/bln",
    benefit: "Santunan kecelakaan untuk 4 anggota keluarga",
  },
];

export default function Insurance() {
  const providers = useMemo<InsuranceOption[]>(
    () => [
      {
        id: "bpjs-digital",
        name: "BPJS Digital Kelas 1",
        platform: "BPJS Kesehatan Mobile",
        premium: "Rp150.000/bln",
        description:
          "Jaminan komprehensif untuk rawat inap, rawat jalan, dan tindakan bedah dengan sistem rujukan nasional.",
        coverage: [
          "Rawat inap kelas 1",
          "Obat kronis (DM, hipertensi)",
          "Rehab medik & fisioterapi",
          "Persalinan & neonatal",
        ],
        hospitals: 2800,
        claimTime: "2 hari kerja",
        rating: 4.6,
        digitalCard: true,
        link: "https://www.bpjs-kesehatan.go.id/",
      },
      {
        id: "halodoc",
        name: "Halodoc Safe+",
        platform: "Halodoc Insurance",
        premium: "Rp275.000/bln",
        description:
          "Proteksi rawat inap swasta + layanan telemed terintegrasi, cocok untuk pekerja remote.",
        coverage: [
          "Rawat inap hingga Rp1,5 miliar",
          "Telekonsultasi spesialis",
          "Second opinion digital",
          "Claim cashless di 90 rumah sakit",
        ],
        hospitals: 90,
        claimTime: "Real-time",
        rating: 4.8,
        digitalCard: true,
        link: "https://www.halodoc.com/insurance",
      },
      {
        id: "sehatplus",
        name: "SehatPlus Signature",
        platform: "SehatPlus by Lifepack",
        premium: "Rp320.000/bln",
        description:
          "Fokus pada penyakit kritis dengan tambahan pengiriman obat kronis sampai rumah.",
        coverage: [
          "Penyakit kritis hingga Rp2 miliar",
          "Cek lab tahunan",
          "Home care perawatan luka",
          "Obat kronis antar 2 jam",
        ],
        hospitals: 120,
        claimTime: "< 24 jam",
        rating: 4.7,
        digitalCard: true,
        link: "https://www.sehatplus.id/",
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState(providers[0]?.id);
  const selected = providers.find((p) => p.id === selectedId) ?? providers[0];

  return (
    <div className="space-y-6">
      <header className="bg-gradient-to-r from-primary/10 via-white to-white border border-primary/10 rounded-2xl p-6 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">
              Proteksi Finansial
            </p>
            <h1 className="text-2xl font-bold text-gray-900">
              Pilih platform asuransi kesehatan yang sesuai rencana perawatan
              Anda
            </h1>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Bandingkan premi, cakupan rumah sakit, dan kecepatan klaim dari
              beberapa platform digital populer.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          <div className="bg-white rounded-xl border border-gray-100 p-3">
            <div className="text-gray-400">Rata-rata premi</div>
            <div className="text-xl font-semibold text-gray-900">
              Rp248K/bln
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-3">
            <div className="text-gray-400">Rumah sakit rekanan</div>
            <div className="text-xl font-semibold text-gray-900">2.800+</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-3">
            <div className="text-gray-400">Waktu klaim tercepat</div>
            <div className="text-xl font-semibold text-gray-900">Realtime</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-3">
            <div className="text-gray-400">Rating pengguna</div>
            <div className="text-xl font-semibold text-gray-900">4.7/5</div>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {providers.map((option) => {
          const isSelected = option.id === selected?.id;
          return (
            <button
              key={option.id}
              onClick={() => setSelectedId(option.id)}
              className={`text-left rounded-2xl border p-5 h-full transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${isSelected ? "border-primary bg-primary/5 shadow-lg" : "border-gray-100 bg-white hover:border-primary/40"}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {option.name}
                </h3>
                <span className="flex items-center gap-1 text-xs text-primary font-semibold">
                  <Star size={14} /> {option.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                {option.platform}
              </p>
              <p className="text-sm text-gray-600 mt-3">{option.description}</p>
              <div className="mt-4 flex items-center gap-2 text-primary font-semibold">
                <ShieldCheck size={16} /> {option.premium}
              </div>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                {option.coverage.slice(0, 3).map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {point}
                  </li>
                ))}
                {option.coverage.length > 3 && (
                  <li className="text-primary text-xs font-medium">
                    +{option.coverage.length - 3} manfaat lain
                  </li>
                )}
              </ul>
            </button>
          );
        })}
      </section>

      {selected && (
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Pilihan aktif
              </p>
              <h2 className="text-2xl font-bold text-gray-900">
                {selected.name}
              </h2>
              <p className="text-sm text-gray-500">{selected.platform}</p>
            </div>
            <a
              href={selected.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-5 py-2 text-sm font-semibold"
            >
              Ajukan di platform
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-4 text-sm">
            <div className="rounded-xl border border-gray-100 p-4 flex items-center gap-3">
              <ShieldCheck className="text-primary" />
              <div>
                <p className="text-gray-400">Premi</p>
                <p className="font-semibold text-gray-900">
                  {selected.premium}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 p-4 flex items-center gap-3">
              <Stethoscope className="text-primary" />
              <div>
                <p className="text-gray-400">RS Rekanan</p>
                <p className="font-semibold text-gray-900">
                  {selected.hospitals}+ RS
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 p-4 flex items-center gap-3">
              <Clock3 className="text-primary" />
              <div>
                <p className="text-gray-400">Proses klaim</p>
                <p className="font-semibold text-gray-900">
                  {selected.claimTime}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 p-4 flex items-center gap-3">
              <CreditCard className="text-primary" />
              <div>
                <p className="text-gray-400">Kartu digital</p>
                <p className="font-semibold text-gray-900">
                  {selected.digitalCard ? "Tersedia" : "Belum tersedia"}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Manfaat utama
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              {selected.coverage.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 p-4 bg-gray-50"
                >
                  <CheckCircle2 className="text-emerald-500 mt-0.5" />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gray-50 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Tambahan fleksibel
            </p>
            <h3 className="text-lg font-semibold text-gray-900">
              Tambah proteksi tanpa ganti polis utama
            </h3>
          </div>
          <p className="text-sm text-gray-500 max-w-xl">
            Kombinasikan polis utama dengan add-on untuk menutup celah biaya
            rawat jalan, kecelakaan, hingga telemed 24/7.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {addOns.map((addon) => (
            <div
              key={addon.name}
              className="rounded-2xl bg-white border border-gray-100 p-5"
            >
              <p className="text-xs uppercase tracking-wide text-gray-400">
                {addon.provider}
              </p>
              <h4 className="text-lg font-semibold text-gray-900">
                {addon.name}
              </h4>
              <p className="text-primary font-semibold mt-1">{addon.price}</p>
              <p className="text-sm text-gray-600 mt-2">{addon.benefit}</p>
              <button className="mt-4 text-sm font-semibold text-primary">
                Tambah ke paket →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Langkah memilih asuransi
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
          <li>
            Tentukan prioritas: rawat inap, penyakit kritis, atau biaya harian.
          </li>
          <li>Bandingkan premi vs limit tahunan dan jaringan rumah sakit.</li>
          <li>
            Cek fitur digital: kartu elektronik, status klaim realtime, telemed.
          </li>
          <li>
            Pastikan integrasi dengan aplikasi monitoring Eltern untuk
            notifikasi klaim.
          </li>
        </ol>
      </section>
    </div>
  );
}
