import './header.css'

function Header({openSettings, openHelp}) {

  return (
    <>
      <nav className="nav-bar">
        <button onClick={openHelp}>Help</button>
        <h1 className="title">Poke Wordle</h1>
        <button onClick={openSettings}>Settings</button>
      </nav>
      <hr></hr>
    </>
  )
}

export default Header