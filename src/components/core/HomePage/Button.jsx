import React from 'react'
import { Link } from 'react-router-dom'
import "../../../App.css"

const Button = ({children,active,linkto}) => {
  return (
    <Link to={linkto}>
        <div className={`text-center text-[13px] buttonBox px-6 py-3 rounded-md font-bold
        ${active? "bg-yellow-50 text-black" : "bg-richblack-800"} buttonBox hover:scale-95 transition-all duration-200`}>
            {children}
        </div>
    </Link>
  );
}

export default Button
