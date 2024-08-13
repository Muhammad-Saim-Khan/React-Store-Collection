import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Bg.css";
const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleData, setSingleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getSingleData = async () => {
      try {
        const fetchData = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );
        if (!fetchData.ok) {
          throw new Error("Network response was not ok");
        }
        const response = await fetchData.json();
        setSingleData(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getSingleData();
  }, [id]);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleBack = () => navigate(-1);

  if (loading)
    return (
      <div className="flex justify-center bg-[# ] items-center h-[100vh] font-bold text-[30px]">
        Loading...
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg mt-24">
      <div className="container">
        <div
          style={{ boxShadow: "0 0 30px -8px #000" }}
          className="flex w-[80%] m-auto flex-col sm:flex-row"
        >
          <img
            width={400}
            src={singleData.image}
            alt={singleData.title}
            className="object-cover"
          />
          <div className="flex-1 p-4">
            <p>
              Home / {singleData.category} / {singleData.title}
            </p>
            <p className="text-3xl font-medium font-sans mt-6">
              ${singleData.price}
            </p>
            <p className="text-lg mt-2">{singleData.description}</p>

            <div className="flex mt-4 items-center flex-col sm:flex-row gap-y-5 justify-between">
              <div className="inline-flex  justify-center items-center ">
                <button
                  onClick={decrement}
                  className="bg-red-500 text-white px-4 py-2  hover:bg-red-600"
                >
                  -
                </button>
                <span className="mx-4 text-xl">{quantity}</span>
                <button
                  onClick={increment}
                  className="bg-green-500 text-white px-4 py-2 hover:bg-green-600"
                >
                  +
                </button>
              </div>
              <div>
                <button className="flex items-center justify-center p-1 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-400 rounded-lg shadow-lg text-white font-['Phantomsans'] text-base sm:text-xl cursor-pointer select-none touch-manipulation">
                  <span className="bg-[#05062D] px-2 py-1 rounded-md transition duration-300 hover:bg-transparent w-full h-full">
                    ADD TO CART
                  </span>
                </button>
              </div>
            </div>
            <hr className="mt-6" />
            <p className="mt-4">Category: {singleData.category}</p>
            <div className="flex justify-center items-center mt-8">
              <button onClick={handleBack} class="btn-17">
                <span class="text-container">
                  <span class="text">BACK</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
