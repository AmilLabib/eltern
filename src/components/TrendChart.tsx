import { useId } from "react";
import type { TooltipContentProps } from "recharts";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export type TrendPoint = {
  label: string;
  value: number;
  note?: string;
};

type TrendChartProps = {
  data: TrendPoint[];
  color?: string;
  height?: number;
  unit?: string;
};

type TrendTooltipProps = Partial<
  Pick<TooltipContentProps<number, string>, "active" | "payload" | "label">
> & { unit?: string };

export default function TrendChart({
  data,
  color = "#2563eb",
  height = 180,
  unit = "",
}: TrendChartProps) {
  const gradientId = `${useId()}-area`;

  return (
    <div>
      <div style={{ height }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.25} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              stroke="#e5e7eb"
              strokeDasharray="4 4"
              vertical={false}
            />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
              padding={{ left: 8, right: 8 }}
            />
            <YAxis
              dataKey="value"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
              width={40}
            />
            <Tooltip
              content={<TrendTooltip unit={unit} />}
              cursor={{ stroke: "#cbd5f5" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={3}
              fill={`url(#${gradientId})`}
              activeDot={{ r: 6, strokeWidth: 2, stroke: "#fff" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const TrendTooltip = ({
  active,
  payload,
  label,
  unit = "",
}: TrendTooltipProps) => {
  if (!active || !payload?.length) return null;
  const point = payload[0]?.payload as TrendPoint | undefined;
  if (!point) return null;

  return (
    <div className="rounded-xl border border-gray-100 bg-white/90 px-3 py-2 shadow">
      <div className="text-xs uppercase text-gray-400">{label}</div>
      <div className="text-sm font-semibold text-gray-900">
        {point.value}
        {unit}
      </div>
      {point.note && (
        <div className="text-[11px] text-gray-500">{point.note}</div>
      )}
    </div>
  );
};
