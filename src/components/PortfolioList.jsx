import { useState } from "react";

const PortfolioList = ({ projects }) => {
  const [visibleScreenshot, setVisibleScreenshot] = useState(null);
  const [screenshotIndex, setScreenshotIndex] = useState({});

  const toggleScreenshot = (index) => {
    setVisibleScreenshot(visibleScreenshot === index ? null : index);

    // Inisialisasi index screenshot jika belum ada
    if (screenshotIndex[index] === undefined) {
      setScreenshotIndex((prev) => ({ ...prev, [index]: 0 }));
    }
  };

  const nextImage = (index) => {
    const currentIndex = screenshotIndex[index] || 0;
    const totalImages = projects[index].screenshots.length;
    const newIndex = (currentIndex + 1) % totalImages;

    setScreenshotIndex((prev) => ({ ...prev, [index]: newIndex }));
  };

  const prevImage = (index) => {
    const currentIndex = screenshotIndex[index] || 0;
    const totalImages = projects[index].screenshots.length;
    const newIndex = (currentIndex - 1 + totalImages) % totalImages;

    setScreenshotIndex((prev) => ({ ...prev, [index]: newIndex }));
  };

  return (
    <div className="space-y-6 mt-4">
      {projects.map((project, index) => (
        <div key={index} className="p-4 border border-gray-700 rounded bg-gray-900 text-white">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p>{project.description}</p>
          <p className="text-sm text-gray-400">{project.tech.join(", ")}</p>

          <button onClick={() => toggleScreenshot(index)} className="mt-2 text-blue-400 underline">
            {visibleScreenshot === index ? "Sembunyikan Screenshot" : "Lihat Proyek"}
          </button>

          {visibleScreenshot === index && (
            <div className="mt-4">
              <img src={project.screenshots[screenshotIndex[index] || 0]} alt={`Screenshot ${project.title}`} className="w-full max-w-xl rounded shadow-md" />
              <div className="flex justify-between mt-2 text-sm">
                <button onClick={() => prevImage(index)} className="text-blue-400 hover:underline">
                  ← Sebelumnya
                </button>
                <span>
                  Gambar {(screenshotIndex[index] || 0) + 1} dari {project.screenshots.length}
                </span>
                <button onClick={() => nextImage(index)} className="text-blue-400 hover:underline">
                  Selanjutnya →
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
