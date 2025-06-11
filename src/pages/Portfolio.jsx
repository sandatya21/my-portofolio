import { useState, useEffect } from "react";
import PortfolioList from "../components/PortfolioList";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat data proyek");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  // Hitung index proyek yang akan ditampilkan
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Portofolio</h1>
      <p className="mt-2 text-gray-300">
        Berikut ini beberapa karya saya dalam project yang pernah saya kerjakan baik personal maupun untuk penelitian. Disini juga disertakan bahasa dan framework yang saya gunakan untuk membangun project tersebut. Silakan dilihat-lihat.
      </p>
      <PortfolioList projects={currentProjects} />

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button onClick={goToPreviousPage} disabled={currentPage === 1} className="bg-purple-700 px-4 py-2 rounded disabled:opacity-50">
          Sebelumnya
        </button>
        <span>
          Halaman {currentPage} dari {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages} className="bg-purple-700 px-4 py-2 rounded disabled:opacity-50">
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
