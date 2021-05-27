import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/imagiflix.png";
import user from "../../assets/user.jpg";
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar absolute top-0 left-0 grid grid-cols-2 grid-flow-col w-full items-center justify-around p-8">
      <div className="justify-self-start  grid grid-cols-2 gap-4 items-center">
        <h1 className="hidden">Imagiflix</h1>
        <img src={logo} alt="Logo Imagiflix" />

        <ul className="grid grid-flow-col gap-3 ">
          <li className="font-bold">Início</li>
          <li>
            <a href="#series">Séries</a>
          </li>
          <li>
            <a href="#filmes">Filmes</a>
          </li>
        </ul>
      </div>
      <div className="justify-self-end flex justify-items-end items-center">
        <form className="relative w-64">
          <input
            type="text"
            className="w-full bg-black rounded py-1 px-3 border border-white transition-all 
            duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100"
            placeholder="Filmes, Séries, Gênero"
          />
          <button className="absolute right-2 py-1" onClick={ e => e.preventDefault()}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className="flex ml-4">
          <img src={user} alt="Foto do usuário" />
          <button>
            <FontAwesomeIcon className="absolute" icon={faCaretDown} />
          </button>
          <ul className="hidden">
            <li>
              <a href="#account">Minha Conta</a>
            </li>
            <li>
              <a href="#logout">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
