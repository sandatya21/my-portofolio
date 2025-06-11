import { Home, Briefcase, Mail, Sun, Menu, BookMarked, HandHeart, Copyright, FileStack } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ onSelect, selected, lightTheme, setLightTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleTheme = () => setLightTheme(!lightTheme);

  const sidebarGradient = lightTheme ? "bg-white text-black" : "bg-[linear-gradient(to_right,#5B0096,#9C00FF)] text-white";

  const baseButtonClass = "flex items-center gap-2 px-4 py-2 w-full text-left rounded transition-colors";
  const selectedClass = lightTheme ? "bg-purple-100 text-black" : "bg-gray-700 text-white";
  const defaultClass = lightTheme ? "text-black hover:bg-gray-200" : "text-white hover:bg-gray-700";

  const renderLinks = () => (
    <>
      <div className="space-y-2">
        {[
          { key: "about", label: "Tentang saya", icon: <Home size={18} /> },
          { key: "penelitian", label: "Penelitian", icon: <BookMarked size={18} /> },
          { key: "pengabdian", label: "Pengabdian", icon: <HandHeart size={18} /> },
          { key: "riwayat", label: "Riwayat Mengajar", icon: <FileStack size={18} /> },
          { key: "hakcipta", label: "Hak Cipta/HKI", icon: <Copyright size={18} /> },
          { key: "portfolio", label: "Portofolio", icon: <Briefcase size={18} /> },
          { key: "contact", label: "Kontak", icon: <Mail size={18} /> },
        ].map(({ key, label, icon }) => (
          <button key={key} onClick={() => onSelect(key)} className={`${baseButtonClass} ${selected === key ? selectedClass : defaultClass}`}>
            {icon} {label}
          </button>
        ))}
      </div>

      <div className="border-t my-4 border-gray-400"></div>

      {/* <button onClick={toggleTheme} className={`flex items-center gap-2 px-4 py-2 text-sm ${lightTheme ? "text-black" : "text-gray-400 hover:text-white"}`}>
        <Sun size={16} /> {lightTheme ? "Tema Gelap" : "Tema Terang"}
      </button> */}
    </>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className={`md:hidden p-4 flex items-center justify-between border-b ${lightTheme ? "bg-white text-black border-gray-300" : "bg-black text-white border-gray-700"}`}>
        <h2 className="text-lg font-bold"></h2>
        <button onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Mobile */}
      {isOpen && (
        <aside className={`md:hidden fixed z-50 top-0 left-0 w-60 h-full p-4 shadow-lg ${sidebarGradient}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold"></h2>
            <button onClick={toggleSidebar}>✕</button>
          </div>
          {renderLinks()}
        </aside>
      )}

      {/* Sidebar Desktop */}
      <aside className={`hidden md:flex md:min-h-screen md:w-60 md:p-4 md:flex-col md:gap-2 ${sidebarGradient}`}>
        <h2 className="text-xl font-bold mb-6">Gung Sandat</h2>
        {renderLinks()}
      </aside>
    </>
  );
}
