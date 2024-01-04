import { useEffect, useState } from "react";
import Intro from "./components/intro/Intro";
import Product from "./types/Types";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Category from "./pages/category/Category";
import Detail from "./pages/details/Detail";
import Form from "./pages/form/Form";

const App = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname, location.state]);

  return (
    <div>
      <Intro />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category data={data} />} />
        <Route path="/detail/:id" element={<Detail data={data} />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
