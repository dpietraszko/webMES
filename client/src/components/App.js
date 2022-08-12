import React, { useState } from "react";

import ResetStyle from "./styled/Reset";
import GlobalStyle from "./styled/Global";
import LoginPanel from "./LoginPanel/LoginPanel";
import MesPanel from "./MesPanel/MesPanel";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoggedInName, setIsLoggedInName] = useState("Dawid Pietraszko");

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      {isLoggedIn ? (
        <MesPanel
          setIsLoggedIn={setIsLoggedIn}
          setIsLoggedInName={isLoggedInName}
        />
      ) : (
        <LoginPanel
          text="Login to webMES"
          setIsLoggedIn={setIsLoggedIn}
          setIsLoggedInName={setIsLoggedInName}
        />
      )}
    </>
  );
};
export default App;