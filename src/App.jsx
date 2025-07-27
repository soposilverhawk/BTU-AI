import React from "react";
import Header from "./Components/Global/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./Components/Global/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;