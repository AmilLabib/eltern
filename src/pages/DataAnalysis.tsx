import { useMemo, useState } from "react";
import type { FC } from "react";

const mockDatasets = {
  temp: [36.5, 36.7, 37.2, 38.1, 37.8, 38.9, 38.4, 37.0, 36.8, 36.9],
  oxy: [98, 97, 96, 95, 98, 99, 97, 96, 98, 98],
  heart: [72, 75, 78, 80, 76, 74, 73, 77, 79, 76],
};

const formatValue = (key: string, v: number) => {
  if (key === "temp") return `${v.toFixed(1)} °C`;
  if (key === "oxy") return `${v}%`;
  return `${v} bpm`;
};

const Sparkline: FC<{ values: number[]; color?: string }> = ({
  values,
  color = "#3B82F6",
}) => {
  const w = 220;
  const h = 60;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * w;
      const y = h - ((v - min) / (max - min || 1)) * h;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="rounded">
      <rect width={w} height={h} rx={6} fill="#fff" />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function DataAnalysis() {
  const [dataset, setDataset] = useState<"temp" | "oxy" | "heart">("temp");
  const values = mockDatasets[dataset];

  const stats = useMemo(() => {
    const sum = values.reduce((s, v) => s + v, 0);
    const avg = sum / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    return { avg, min, max };
  }, [values]);

  return (
    <div className="min-h-screen p-4 bg-bg">
      <div className="flex items-center justify-between bg-primary text-white px-4 py-3 rounded-md shadow-md">
        <div className="font-semibold text-lg">Data Analysis</div>
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setDataset("temp")}
            className={`flex-1 py-2 rounded ${dataset === "temp" ? "bg-primary text-white" : "bg-white text-text"}`}
          >
            Temp
          </button>
          <button
            onClick={() => setDataset("oxy")}
            className={`flex-1 py-2 rounded ${dataset === "oxy" ? "bg-primary text-white" : "bg-white text-text"}`}
          >
            Oxy
          </button>
          <button
            onClick={() => setDataset("heart")}
            className={`flex-1 py-2 rounded ${dataset === "heart" ? "bg-primary text-white" : "bg-white text-text"}`}
          >
            Heart
          </button>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Summary</div>
              <div className="text-xs text-gray-500">
                Showing last {values.length} records
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">
                {formatValue(dataset, stats.avg)}
              </div>
              <div className="text-sm text-gray-500">Average</div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-gray-500">Min</div>
              <div className="font-semibold">
                {formatValue(dataset, stats.min)}
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-gray-500">Max</div>
              <div className="font-semibold">
                {formatValue(dataset, stats.max)}
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-gray-500">Avg</div>
              <div className="font-semibold">
                {formatValue(dataset, stats.avg)}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm font-medium mb-2">Trend</div>
            <Sparkline
              values={values}
              color={
                dataset === "oxy"
                  ? "#10B981"
                  : dataset === "temp"
                    ? "#3B82F6"
                    : "#ef4444"
              }
            />
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-md">
          <div className="text-sm font-medium">Automated Analysis</div>
          <div className="mt-2 text-sm text-gray-700">
            {dataset === "temp" && (
              <div>
                Recommendation: Monitor fever if average &gt; 37.5°C. Contact
                healthcare if sustained high readings.
              </div>
            )}
            {dataset === "oxy" && (
              <div>
                Recommendation: SpO2 &gt;= 95% is normal. If values fall below
                92% consider medical attention.
              </div>
            )}
            {dataset === "heart" && (
              <div>
                Recommendation: Track for tachycardia if average &gt; 100 bpm or
                bradycardia if &lt; 50 bpm.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
