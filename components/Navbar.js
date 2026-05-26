import Link from "next/link";

export default function Navbar() {
  const toggleMenu = () => {
    if (typeof document === "undefined") return;
    const menu = document.querySelector(".side-menu");
    if (!menu) return;
    menu.classList.toggle("open");
  };

  return (
    <header>
      <div className="container flex justify-between items-center py-4">
        <Link href="/">
          <h1>Sudhir Law Chambers</h1>
        </Link>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
