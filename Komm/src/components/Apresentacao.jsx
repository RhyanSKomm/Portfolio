import './../assets/apresentacao.css'
import { Highlighter } from "@/components/magicui/highlighter";

function Apresentacao() {
    return (
        <div className="apresentacao">
            <div className="apresentacao-texto">
                <p>
                    Olá, me chamo <br />
                    <span className="apresentacao-nome">
                        <Highlighter action="highlight" color="#007BFF">
                            Rhyan Komm
                        </Highlighter>
                    </span><br />
                    e sou desenvolvedor <span className="apresentacao-cargo">
                        <Highlighter action="underline" color="#28A745">
                            full-stack
                        </Highlighter>
                    </span>
                </p>
            </div>
            <div className="apresentacao-imagem">
                <img src="/Rhyan.jpeg" alt="Rhyan" />
            </div>
        </div>
    );
}

export default Apresentacao;
    