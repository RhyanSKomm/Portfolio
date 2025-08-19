import { useState, useEffect } from "react";
import "../assets/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // altura a partir da qual o fundo muda
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <a href="#topo"><img src="/logoKOMM.png" alt="Logo" className="logo"/></a>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#sobre">Sobre Mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#Contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
