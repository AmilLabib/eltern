import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-6">
      <div className="max-w-md w-full bg-white rounded-xl p-6 shadow-md text-center">
        <img src="/logo.png" alt="eltern" className="mx-auto w-32 mb-4" />
        <h1 className="text-2xl font-bold">eltern</h1>
        <p className="mt-2 text-text">
          Solusi pemantauan kesehatan mobile untuk keluarga Anda. Pantau suhu,
          oksigen, detak jantung, dan deteksi jatuh dengan cepat.
        </p>
        <div className="mt-4">
          <Link
            to="/features"
            className="inline-block bg-primary text-white px-4 py-2 rounded-lg"
          >
            Lihat Fitur
          </Link>
        </div>
      </div>
    </div>
  );
}
