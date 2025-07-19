import React from "react";
import Button from "./Components/Shared/Button/Button";
import Header from "./Components/Global/Header/Header";
import AppRoutes from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
