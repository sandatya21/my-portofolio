import { useEffect, useState } from "react";

const RiwayatList = () => {
  const [riwayat, setRiwayat] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data/riwayat.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data riwayat");
        return res.json();
      })
      .then((data) => setRiwayat(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="relative border-l-4 border-purple-500 ml-4 pl-6 mt-6 space-y-8">
      {riwayat.map((item, index) => (
        <div key={index} className="relative group">
          <div className="absolute -left-6 top-1.5 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-md"></div>
          <div className="bg-purple-50 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold text-purple-800">{item.instansi}</h3>
            <p className="text-sm text-gray-600">{item.tahun}</p>
            <p className="mt-2 text-gray-800">
              <span className="font-medium">Mengampu Matkul/Mapel :</span> {item.mk}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RiwayatList;
