import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import Footer from "./Component/Footer/Footer";
import Statistics from "./Component/Statistics/Statistics";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Statistics></Statistics>
      <Footer></Footer>
    </div>
  );
}

export default App;
