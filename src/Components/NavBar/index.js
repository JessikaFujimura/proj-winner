/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.css";
import React from "react";
import { DrawerContext } from "../../App";
import logo from "../../assets/Logo.png";

export default function NavBar() {
  const drawer = React.useContext(DrawerContext);
  return (
    <nav className="header">
      <div className="board-logo">
        <img src={logo} alt="logo" className="logo-winner-nav" />
      </div>
      <ul className="nav navbar-light">
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={drawer}>
            Criar Jogo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={drawer}>
            Exemplo de jogo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" onClick={drawer}>Estatísticas</a>
        </li>
      </ul>
      <form className="d-flex search">
        <input className="form-control me-2" type="search" placeholder="Digite aqui ..." aria-label="Search" /> 
        <button className="btn btn-success" type="submit">Pesquisar</button>
      </form>
    </nav>
  );
}
