export default function About() {
  return (
    <div className="p-6 text-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Tentang Saya</h1>

      {/* Foto profil */}
      <div className="flex justify-center mb-6">
        <img src="/profile.jpg" alt="Foto Profil" className="rounded-full w-40 h-30 object-cover border-1 border-white shadow-lg" />
      </div>

      <p className="text-lg leading-relaxed text-justify mb-4">
        Saya adalah seorang Dosen, Guru dan Peneliti pada bidang Rekayasa Perangkat Lunak, Sistem Informasi, dan Teknologi Informasi. Saya memiliki pengalaman dalam mengajar dan membimbing siswa dan mahasiswa. Selain itu, saya juga aktif
        dalam penelitian dan pengembangan di bidang teknologi informasi.
      </p>

      <p className="text-lg leading-relaxed text-justify mb-4">
        📖 Publikasi penelitian saya tersedia di{" "}
        <a href="https://scholar.google.com/citations?user=4SDkqjIAAAAJ&hl=en" className="underline text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
          Google Scholar
        </a>
        .
      </p>

      <p className="text-lg leading-relaxed text-justify mb-4">
        📝 Saya rutin menulis artikel di{" "}
        <a href="https://dev.to/sandatya_widhi_ce7cb1c809" className="underline text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
          Dev.to
        </a>
        .
      </p>

      <p className="text-lg leading-relaxed text-justify">
        👨‍💻 Proyek saya tersedia di{" "}
        <a href="https://github.com/sandatya21" className="underline text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
