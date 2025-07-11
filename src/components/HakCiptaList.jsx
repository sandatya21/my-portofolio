import { useEffect, useState } from "react";

const HakCiptaList = () => {
  const [hakcipta, setHakCipta] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data/hakcipta.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data hakcipta");
        return res.json();
      })
      .then((data) => setHakCipta(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-purple-200 text-black rounded-lg">
            <th className="text-left px-4 py-3 rounded-l-lg">No</th>
            <th className="text-left px-4 py-3">Judul Hak Cipta</th>
            <th className="text-left px-4 py-3">Tahun</th>
            <th className="text-left px-4 py-3 rounded-r-lg">Jenis Hak Cipta</th>
          </tr>
        </thead>
        <tbody>
          {hakcipta.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-purple-50" : "bg-purple-100"} text-black`}>
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{item.judul}</td>
              <td className="px-4 py-2">{item.tahun}</td>
              <td className="px-4 py-2">{item.jenis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HakCiptaList;
