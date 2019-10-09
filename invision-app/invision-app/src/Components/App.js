import React from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import "../css/App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
