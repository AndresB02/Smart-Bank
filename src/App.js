import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";

import Container from "./Components/Container";
import Header from "./Components/Header";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(() => {
    const temaGuardado = localStorage.getItem("tema");
    return temaGuardado ? JSON.parse(temaGuardado) : true;
  });
  //useEffect junto con localStorage y el JSON.stringify ayudan a guardar
  // y mantener la informacion
  useEffect(() => {
    localStorage.setItem("tema", JSON.stringify(tema));
  });

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
