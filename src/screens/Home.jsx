import React, { useEffect, useState } from "react";
import Cards from "../components/Card";
import axios from "axios";
import Dashboard from "./Dashboard";
import Footer from "../components/Footer";
import "./loader.css";
const Home = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Dashboard />
      {loading ? (
        <div className="flex items-center justify-center h-96">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productData.map((e) => (
              <Cards
                key={e.id}
                id={e.id}
                title={e.title}
                image={e.image}
                price={e.price}
                category={e.category}
                rating={e.rating}
                desc={e.description}
              />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
