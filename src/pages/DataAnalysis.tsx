import { useMemo, useState } from "react";
import { BarChart3 } from "lucide-react";
import TrendChart, { type TrendPoint } from "../components/TrendChart";

const mockDatasets = {
  temp: [36.5, 36.7, 37.2, 38.1, 37.8, 38.9, 38.4, 37.0, 36.8, 36.9],
  oxy: [98, 97, 96, 95, 98, 99, 97, 96, 98, 98],
  heart: [72, 75, 78, 80, 76, 74, 73, 77, 79, 76],
};

type DatasetKey = keyof typeof mockDatasets;

const featureLabels: Record<DatasetKey, string> = {
  temp: "Suhu Tubuh",
  oxy: "Saturasi Oksigen",
  heart: "Detak Jantung",
};

const formatValue = (key: string, v: number) => {
  if (key === "temp") return `${v.toFixed(1)} °C`;
  if (key === "oxy") return `${v}%`;
  return `${v} bpm`;
};

export default function DataAnalysis() {
  const [dataset, setDataset] = useState<DatasetKey>("temp");
  const values = mockDatasets[dataset];
  const unit = dataset === "temp" ? " °C" : dataset === "oxy" ? "%" : " bpm";
  const getPointStatus = (key: DatasetKey, value: number) => {
    if (key === "temp") {
      if (value >= 38.5) return "Demam tinggi";
      if (value >= 37.5) return "Demam";
      return "Normal";
    }
    if (key === "oxy") {
      if (value < 92) return "Kritis";
      if (value < 95) return "Waspada";
      return "Stabil";
    }
    if (value > 100) return "Takikardia";
    if (value < 55) return "Bradikardia";
    return "Normal";
  };

  const stats = useMemo(() => {
    const sum = values.reduce((s, v) => s + v, 0);
    const avg = sum / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    return { avg, min, max };
  }, [values]);

  const trendData = useMemo<TrendPoint[]>(
    () =>
      values.map((value, index) => ({
        label: `Data ${index + 1}`,
        value,
        note: getPointStatus(dataset, value),
      })),
    [values, dataset],
  );

  const insight = useMemo(() => {
    if (dataset === "temp") {
      return {
        label: "Demam Terpantau",
        tone: "bg-amber-50 text-amber-700 border-amber-200",
        summary:
          "Suhu rata-rata memanjang di atas 37,5°C. Risiko dehidrasi meningkat jika tidak ada intervensi dalam 6 jam.",
        actions: [
          "Catat konsumsi obat penurun panas terakhir",
          "Pantau ulang suhu setiap 30 menit",
          "Hubungi dokter jika mencapai ≥ 39°C",
        ],
        checklistTitle: "Langkah lanjutan",
      };
    }
    if (dataset === "oxy") {
      return {
        label: "Saturasi Stabil",
        tone: "bg-emerald-50 text-emerald-700 border-emerald-200",
        summary:
          "SpO₂ konsisten pada kisaran aman. Tidak ada indikasi hipoksia, lanjutkan aktivitas ringan.",
        actions: [
          "Jadwalkan latihan pernapasan 5 menit",
          "Pastikan humidifier menyala untuk kenyamanan",
          "Siapkan oksimeter cadangan untuk verifikasi",
        ],
        checklistTitle: "Rekomendasi",
      };
    }
    return {
      label: "Waspada Takikardia",
      tone: "bg-rose-50 text-rose-700 border-rose-200",
      summary:
        "Detak beberapa kali menembus 100 bpm. Hindari kafein dan pastikan pasien beristirahat.",
      actions: [
        "Aktifkan mode monitoring intensif 1 jam",
        "Lakukan teknik pernapasan 4-7-8",
        "Laporkan pada caregiver jika berulang >3 kali",
      ],
      checklistTitle: "Prioritas",
    };
  }, [dataset]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 bg-primary text-white px-4 py-4 rounded-2xl shadow-md md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <div className="p-3 rounded-2xl bg-white/10 text-white">
            <BarChart3 size={20} />
          </div>
          <div>
            <div className="font-semibold text-lg">Data Analysis</div>
            <div className="text-sm text-white/80">
              Monitor suhu, oksigen, dan detak dalam satu layar besar
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {(["temp", "oxy", "heart"] as DatasetKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setDataset(key)}
            className={`flex-1 min-w-[120px] py-2 px-4 rounded-lg text-sm font-semibold transition ${dataset === key ? "bg-primary text-white" : "bg-white text-text"}`}
          >
            {featureLabels[key]}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl bg-white p-5 shadow-md border border-gray-100">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="text-sm font-medium">Summary</div>
              <div className="text-xs text-gray-500">
                {values.length} data terbaru
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">
                {formatValue(dataset, stats.avg)}
              </div>
              <div className="text-xs text-gray-500">Rata-rata</div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="p-3 bg-gray-50 rounded-xl">
              <div className="text-xs text-gray-500">Min</div>
              <div className="font-semibold">
                {formatValue(dataset, stats.min)}
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl">
              <div className="text-xs text-gray-500">Max</div>
              <div className="font-semibold">
                {formatValue(dataset, stats.max)}
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl">
              <div className="text-xs text-gray-500">Avg</div>
              <div className="font-semibold">
                {formatValue(dataset, stats.avg)}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm font-medium mb-2">Trend</div>
            <TrendChart
              data={trendData}
              color={
                dataset === "oxy"
                  ? "#10B981"
                  : dataset === "temp"
                    ? "#3B82F6"
                    : "#ef4444"
              }
              unit={unit}
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md border border-gray-100 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Analisis Otomatis</div>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${insight.tone}`}
            >
              {insight.label}
            </span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            {insight.summary}
          </p>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
              {insight.checklistTitle}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              {insight.actions.map((action) => (
                <li
                  key={action}
                  className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
