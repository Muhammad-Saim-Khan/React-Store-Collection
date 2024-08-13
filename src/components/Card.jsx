import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./CardStyles.css";
import "../App.css";

export default function Cards({
  image,
  category,
  title,
  desc,
  id,
  rating,
  price,
}) {
  const navigate = useNavigate();
  const starCount = 5;
  const filledStars = Math.floor(rating.rate);
  const hasHalfStar = rating.rate % 1 >= 0.5;
  return (
    <Card className="card border cursor-pointer border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <CardMedia
        sx={{ height: 350 }}
        image={image}
        title={title}
        className="object-cover w-full"
      />
      <div className="bg-[#F2F2F2] hover:bg-[#DADADA]">
        {" "}
        <CardContent className="flex-1 p-4">
          <Typography
            variant="body2"
            color="text.secondary"
            className="text-sm pb-2 pt-2"
          >
            {category}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className="truncate"
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            className="text-sm line-clamp-2 mb-2"
          >
            {desc}
          </Typography>

          <div className="flex items-center  mt-2">
            {[...Array(starCount)].map((_, index) => (
              <span key={index}>
                {index < filledStars ? (
                  <FaStar className="h-5 w-5 text-yellow-500" />
                ) : index === filledStars && hasHalfStar ? (
                  <FaStarHalfAlt className="h-5 w-5 text-yellow-500" />
                ) : (
                  <FaRegStar className="h-5 w-5 text-gray-300" />
                )}
              </span>
            ))}
          </div>
          <Typography
            variant="h8"
            color="text.secondary"
            className="text-sm line-clamp-2 pt-2"
          >
            ${price}
          </Typography>
        </CardContent>
        <CardActions className="p-4 ">
          <div className="flex w-full items-center justify-center ">
            <button
              onClick={() => navigate(`/product/${id}`)}
              className="relative w-full max-w-48 h-12 outline-none transition duration-100 bg-transparent border-none text-xs font-bold text-[#000000] flex items-center justify-center"
            >
              Quick View
              <div
                id="clip"
                className="absolute top-0 left-0 w-full h-full border-5 border-double border-[#2761c3] shadow-inner shadow-[#195480] clip-path"
              >
                <div
                  id="leftTop"
                  className="corner absolute top-[-1.96em] left-[-3.0em]"
                ></div>
                <div
                  id="rightBottom"
                  className="corner absolute top-[45%] left-[88%]"
                ></div>
                <div
                  id="rightTop"
                  className="corner absolute top-[-1.98em] left-[91%]"
                ></div>
                <div
                  id="leftBottom"
                  className="corner absolute top-[2.10em] left-[-2.15em]"
                ></div>
              </div>
              <span
                id="rightArrow"
                className="arrow absolute top-[35%] w-[11%] h-[30%] bg-[#2761c3] left-[102%]"
              ></span>
              <span
                id="leftArrow"
                className="arrow absolute top-[35%] w-[11%] h-[30%] bg-[#2761c3] left-[-13.5%]"
              ></span>
            </button>
          </div>
        </CardActions>
      </div>
    </Card>
  );
}
