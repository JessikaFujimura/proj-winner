import React from "react";
import "./App.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "./assets/Logo.png";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";

export const DrawerContext = React.createContext();

function App() {
 const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <main className="main">
      <DrawerContext.Provider value={toggleDrawer}>
      <NavBar drawer={toggleDrawer}/>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <img src={logo} alt="logo" className="logo-winner" />
        <ul className="list">
          <li>Mega-Sena</li>
          <li>Quina</li>
          <li>Lotofácil</li>
          <li>Lotomania</li>
          <li>Dupla-sena</li>
          <li>Dia de Sorte</li>
          <li>Timemania</li>
          <li>Super Sete</li>
        </ul>
      </Drawer>
      <Home />
      </DrawerContext.Provider>
    </main>
  );
}

export default App;
