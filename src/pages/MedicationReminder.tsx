import { useMemo, useState } from "react";
import { Bell, CalendarCheck2, Clock, Pill } from "lucide-react";

type Reminder = {
  id: number;
  medicine: string;
  dosage: string;
  times: string[];
  notes: string;
};

const reminderData: Reminder[] = [
  {
    id: 1,
    medicine: "Paracetamol",
    dosage: "500 mg",
    times: ["08:00", "20:00"],
    notes: "Demam dan nyeri otot",
  },
  {
    id: 2,
    medicine: "Vitamin D3",
    dosage: "1 kapsul",
    times: ["07:00"],
    notes: "Konsumsi setelah sarapan",
  },
  {
    id: 3,
    medicine: "Antihipertensi",
    dosage: "10 mg",
    times: ["06:30"],
    notes: "Pantau tekanan darah sebelum minum",
  },
];

const defaultForm = {
  medicine: "Vitamin C",
  dosage: "1 tablet",
  time: "09:00",
  frequency: "Harian",
};

export default function MedicationReminder() {
  const [form, setForm] = useState(defaultForm);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  const nextReminder = useMemo(() => {
    const flatTimes = reminderData
      .map((item) =>
        item.times.map((time) => ({
          time,
          label: `${item.medicine} (${item.dosage})`,
        })),
      )
      .flat();

    return flatTimes[0];
  }, []);

  function handleChange(field: keyof typeof defaultForm, value: string): void {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave() {
    const timestamp = new Date().toLocaleString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "short",
    });
    setLastSaved(timestamp);
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Pengingat Obat
          </h1>
          <p className="text-sm text-gray-600">
            Jadwalkan konsumsi obat sesuai kebutuhan keluarga dan dapatkan
            notifikasi tepat waktu.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-primary font-semibold">
          <Bell size={18} />
          Mode pengingat aktif
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-5 shadow-md border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-xl text-primary">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Pengingat terdekat</div>
                <div className="text-xl font-semibold text-gray-900">
                  {nextReminder?.time} · {nextReminder?.label}
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Pastikan obat telah tersedia dan dikonsumsi sesuai jadwal di atas.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reminderData.map((reminder) => (
              <div
                key={reminder.id}
                className="rounded-2xl bg-white p-4 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-xl">
                    <Pill size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {reminder.medicine}
                    </div>
                    <div className="text-xs text-gray-500">
                      {reminder.dosage}
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-sm text-gray-600">
                  Jadwal minum:
                  <div className="mt-1 font-semibold text-gray-900">
                    {reminder.times.join(" · ")}
                  </div>
                </div>

                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  Catatan: {reminder.notes}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md border border-gray-100">
          <div className="flex items-center gap-2 text-gray-900 font-semibold">
            <CalendarCheck2 size={18} className="text-primary" />
            Personalisasi Jadwal
          </div>
          <p className="mt-1 text-sm text-gray-600">
            Gunakan dummy form ini untuk mensimulasikan jadwal sesuai kebutuhan
            pasien.
          </p>

          <div className="mt-4 space-y-3">
            <div>
              <label className="text-xs text-gray-500 uppercase">
                Nama Obat
              </label>
              <input
                value={form.medicine}
                onChange={(e) => handleChange("medicine", e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 uppercase">Dosis</label>
              <input
                value={form.dosage}
                onChange={(e) => handleChange("dosage", e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 uppercase">Waktu</label>
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase">
                  Frekuensi
                </label>
                <select
                  value={form.frequency}
                  onChange={(e) => handleChange("frequency", e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option>Harian</option>
                  <option>Dua kali sehari</option>
                  <option>Mingguan</option>
                </select>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-sm text-gray-700">
              <div className="font-semibold text-gray-900 mb-1">
                Preview Pengingat
              </div>
              Minum {form.medicine} sebanyak {form.dosage} pada pukul{" "}
              <span className="font-semibold">{form.time}</span> (
              {form.frequency}).
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold shadow"
            >
              Simpan Jadwal Dummy
            </button>

            {lastSaved && (
              <div className="text-xs text-gray-500 text-center">
                Jadwal disimpan {lastSaved}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
