import './header.css'
import { IoMdSettings } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";


function Header({openSettings, openHelp}) {

  return (
    <>
      <nav className="nav-bar">
        <FaRegQuestionCircle onClick={openHelp} className="icon"/>
        <h1 className="title">Poke Wordle</h1>
        <IoMdSettings onClick={openSettings} className="icon"/>
        
      </nav>
      <hr></hr>
    </>
  )
}

export default Header