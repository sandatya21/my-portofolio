import PengabdianList from "../components/PengabdianList";

export default function Pengabdian() {
  return (
    <div className="p-6 text-white max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Daftar Pengabdian</h1>
      <PengabdianList />
    </div>
  );
}
