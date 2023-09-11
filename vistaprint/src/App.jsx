import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";
// import Middle from "./Components/Middle";
import Navnar from "./Components/Navnar";
// import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navnar />
      {/* <Home /> */}
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
