import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "./assets/Logo.png";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import CriarJogo from "./Pages/CriarJogo";
import ExemploJogo from "./Pages/ExemploJogo";
import Estatisticas from "./Pages/Estatisticas";
import "./App.css";

export const DrawerContext = React.createContext();
export const NavContext = React.createContext();

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [context, setContext] = React.useState("a");
  const [game, setGame] = React.useState("a")
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  React.useEffect(() => {setGame(game)}, [game])

  return (
    <Router>
      <main className="main">
        <DrawerContext.Provider value={toggleDrawer}>
        <NavContext.Provider value={setContext}>
          <NavBar/>
          <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
            <img src={logo} alt="logo" className="logo-winner" />
            <ul className="list">
              <li>
                <Link to={`/proj-winner/${context}/mega-sena`} onClick={()=>setGame("mega-sena")}>Mega-Sena</Link>
              </li>
              <li><Link to={`/proj-winner/${context}/quina`} onClick={() =>setGame("quina")}>Quina</Link></li>
              <li><Link to={`/proj-winner/${context}/lotofacil`} onClick={() =>setGame("lotofacil")}>Lotofácil</Link></li>
              <li><Link to={`/proj-winner/${context}/lotomania`} onClick={() =>setGame("lotomania")}>Lotomania</Link></li>
              <li><Link to={`/proj-winner/${context}/dupla-sena`} onClick={() =>setGame("dupla-sena")}>Dupla-sena</Link></li>
            </ul>
          </Drawer>
          <Routes>
            <Route path="/proj-winner" element={<Home />} />
            <Route
              path={`/proj-winner/criar-jogo/${game}`}
              element={<CriarJogo header={game}/>}
            />
            <Route
              path={`/proj-winner/exemplo-jogo/${game}`}
              element={<ExemploJogo />}
            />
            <Route
              path={`/proj-winner/estatisticas/${game}`}
              element={<Estatisticas />}
            />
          </Routes>
          </NavContext.Provider>
        </DrawerContext.Provider>
      </main>
    </Router>
  );
}

export default App;
