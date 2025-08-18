import "../assets/navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">
                <a href="#topo"><img src="../../public/logoKOMM.png" alt="" className="logo"/></a>
            </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#sobre">Sobre Mim</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#Contato">Contato</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar;