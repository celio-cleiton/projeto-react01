import React from "react";
import data from "./components/back/Data/Data";
import Header from "./components/front/header";
import Main from "./components/front/main";
import GlobalStyle from "./globalStyles";

function App() {
  const { productItems } = data;

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main productItems={productItems} />
    </div>
  );
}

export default App;
