import React from "react";
import Header from "./Components/Global/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./Components/Global/Footer/Footer";
import DummyDataGenerator from "./Components/DummyDataGenerator";

function App() {
  return (
    <>
      <Header />
      <DummyDataGenerator />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
