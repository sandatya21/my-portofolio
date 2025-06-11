import { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Penelitian from "./pages/Penelitian";
import Pengabdian from "./pages/Pengabdian";
import Riwayat from "./pages/Riwayat";
import Footer from "./components/Footer";
import HakCipta from "./pages/HakCipta";

export default function App() {
  const [selectedPage, setSelectedPage] = useState("about");
  const [lightTheme, setLightTheme] = useState(false); // Tambah pengaturan tema

  const renderContent = () => {
    switch (selectedPage) {
      case "about":
        return <About />;
      case "penelitian":
        return <Penelitian />;
      case "pengabdian":
        return <Pengabdian />;
      case "hakcipta":
        return <HakCipta />;
      case "portfolio":
        return <Portfolio />;
      case "riwayat":
        return <Riwayat />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-poppins transition-colors duration-300 ${lightTheme ? "bg-white text-black" : "bg-black text-white"}`}>
      <div className="flex flex-1">
        <Sidebar onSelect={setSelectedPage} selected={selectedPage} lightTheme={lightTheme} setLightTheme={setLightTheme} />
        <main className="flex-1 p-4 overflow-y-auto">{renderContent()}</main>
      </div>
      <Footer />
    </div>
  );
}
