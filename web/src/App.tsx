import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import "./App.css";

import GlobalStyle from "./styles/global";

import Routes from "./routes";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
