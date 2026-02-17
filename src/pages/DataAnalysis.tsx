import { useMemo, useState } from "react";
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

  const allFeatureStats = useMemo(() => {
    return (Object.entries(mockDatasets) as [DatasetKey, number[]][]).map(
      ([key, data]) => {
        const sum = data.reduce((s, v) => s + v, 0);
        const avg = sum / data.length;
        const min = Math.min(...data);
        const max = Math.max(...data);
        const latest = data[data.length - 1];
        return { key, data, avg, min, max, latest };
      },
    );
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 bg-primary text-white px-4 py-4 rounded-2xl shadow-md md:flex-row md:items-center md:justify-between">
        <div className="font-semibold text-lg">Data Analysis</div>
        <div className="text-sm text-white/80">
          Monitor suhu, oksigen, dan detak dalam satu layar besar
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

        <div className="rounded-2xl bg-white p-5 shadow-md border border-gray-100">
          <div className="text-sm font-medium">Analisis Otomatis</div>
          <div className="mt-2 text-sm text-gray-700">
            {dataset === "temp" && (
              <div>
                Rekomendasi: Suhu rata-rata di atas 37,5°C perlu dipantau.
                Segera hubungi tenaga medis jika demam tidak kunjung turun.
              </div>
            )}
            {dataset === "oxy" && (
              <div>
                Rekomendasi: SpO2 ≥ 95% masih normal. Jika turun di bawah 92%
                segera periksa dan siapkan bantuan oksigen bila perlu.
              </div>
            )}
            {dataset === "heart" && (
              <div>
                Rekomendasi: Pantau tanda takikardia jika rata-rata &gt; 100
                bpm. Jika detak &lt; 50 bpm, detak jantung Anda terlalu
                lemah—cepat istirahat dan konsultasikan dengan dokter bila
                keluhan berlanjut.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-md border border-gray-100">
        <div className="text-sm font-medium mb-4">
          Semua Pengukuran Fitur Medis
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {allFeatureStats.map(({ key, data, avg, min, max, latest }) => (
            <div
              key={key}
              className="p-4 border border-gray-100 rounded-xl bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">
                    {featureLabels[key]}
                  </div>
                  <div className="text-xs text-gray-500">
                    Total {data.length} data terbaru
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-base font-bold">
                    {formatValue(key, latest)}
                  </div>
                  <div className="text-xs text-gray-500">Terbaru</div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-gray-600">
                <div>
                  <div className="font-medium text-gray-900">Min</div>
                  <div>{formatValue(key, min)}</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Max</div>
                  <div>{formatValue(key, max)}</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Avg</div>
                  <div>{formatValue(key, avg)}</div>
                </div>
              </div>

              <div className="mt-3 text-xs text-gray-500 leading-relaxed">
                Riwayat: {data.map((v) => formatValue(key, v)).join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
