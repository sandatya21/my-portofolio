export default function Footer() {
  return (
    <footer
      className="mt-auto p-4 text-center text-sm text-gray-100"
      style={{
        background: "linear-gradient(to right,#5B0096,#9C00FF)",
      }}
    >
      <div className="space-x-4">
        <span>© 2025 Anak Agung Sandatya</span>
        <a href="mailto:widhiyanti@stikom-bali.ac.id" className="hover:text-white">
          Email
        </a>
        <a href="https://www.instagram.com/sandatyaw/" className="hover:text-white">
          Instagram
        </a>
      </div>
    </footer>
  );
}
