import { useEffect, useState } from "react";
import Intro from "./components/intro/Intro";
import Product, { DetailTypes } from "./types/Types";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Category from "./pages/category/Category";
import Detail from "./pages/details/Detail";
import Form from "./pages/form/Form";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [productData, setProductData] = useState<DetailTypes[]>([]);
  const [count, setCount] = useState(1);
  const [quantity, setQuantity] = useState(1);
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
      <Intro
        productData={productData}
        count={count}
        setCount={setCount}
        quantity={quantity}
        setQuantity={setQuantity}
        setProductData={setProductData}
      />
      <Routes>
        <Route path="/" element={<Home setCount={setCount} />} />
        <Route
          path="/category/:id"
          element={<Category setCount={setCount} data={data} />}
        />
        <Route
          path="/detail/:id"
          element={
            <Detail
              data={data}
              setProductData={setProductData}
              productData={productData}
              count={count}
              setCount={setCount}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          }
        />
        <Route
          path="/form"
          element={
            <Form productData={productData} setProductData={setProductData} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
