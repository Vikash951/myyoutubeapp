import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const navigate = useNavigate();

  if (!isMenuOpen) return null;

  const handleNavigation = (query) => {
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="p-5 shadow-lg w-48 h-screen bg-white top-0 left-0 fixed mt-14">
      <ul>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Home")}>Home</li>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Shorts")}>Shorts</li>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Videos")}>Videos</li>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Live")}>Live</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Music")}>Music</li>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Sports")}>Sports</li>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Gaming")}>Gaming</li>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Movies")}>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Music")}>Music</li>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Sports")}>Sports</li>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Gaming")}>Gaming</li>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleNavigation("Movies")}>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
