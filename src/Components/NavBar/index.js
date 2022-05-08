/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.css";
import React from "react";
import { DrawerContext, NavContext } from "../../App";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const drawer = React.useContext(DrawerContext);
  const context = React.useContext(NavContext);

function action(e){
  drawer();
  context(e);
}

  return (
    <nav className="header">
      <div className="board-logo">
        <Link to="/proj-winner"><img src={logo} alt="logo" className="logo-winner-nav" /></Link>
      </div>
      <ul className="nav navbar-light">
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => action("criar-jogo")}>
            Criar Jogo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => action("exemplo-jogo")}>
            Exemplo de jogo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => action("estatisticas")}>Estatísticas</a>
        </li>
      </ul>
      <form className="d-flex search">
        <input className="form-control me-2" type="search" placeholder="Digite aqui ..." aria-label="Search" /> 
        <button className="btn btn-success" type="submit">Pesquisar</button>
      </form>
    </nav>
  );
}
