import React from "react";
import { Link } from 'react-router-dom';
import ThemeSwitcher from "./ThemeSwitcher" 

const Header = () => {
  return (
    <div className="bg-white mb-5 py-3 border-b px-3 bg-white">
      <div className="max-w-3xl mx-auto flex-row flex justify-between">
        <div className="text-xl font-bold text-gray-700 hover:text-gray-600 my-auto">
          <Link to="/">Jepara COVID-19</Link>        
        </div>
        <div className="my-auto text-gray-700"><ThemeSwitcher/></div>
      </div>
    </div>
  )
}

export default Header