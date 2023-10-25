import { FaChevronUp } from "react-icons/fa";
import { useState ,useEffect} from "react";
function Scroll_To_Top_Button() {
  const [ToggleBtn, setToggleBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
        window.scrollY > 10 ? setToggleBtn(true) : setToggleBtn(false);
        console.log("s")
      });
      
  }, [])
  

  return (
    <div className={`fixed w-9 h-9 box-border flex justify-center items-center z-[999] bg-yellow-50 rounded-md  right-6 md:bottom-[2vh] bottom-[2vh] cursor-pointer hover:animate-bounce duration-300 ease-in-out ${ToggleBtn ?  'opacity-100' :'opacity-0'}`} onClick={()=>(window.scrollTo({top:0,behavior:"smooth"}))}>
      <FaChevronUp className="text-2xl text-black"></FaChevronUp>
    </div>
  );
}

export default Scroll_To_Top_Button;
