import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Empty from "./components/empty/Empty";
function App() {
  //https://1gt9jcx5-4000.use2.devtunnels.ms/profile

  return (
    <>
      <div className="header">
        <Empty title={"Convert Binary Systems"} />
      </div>

      <div className="box-body">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
