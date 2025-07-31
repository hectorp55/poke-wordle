import './App.css';

import Header from './header/header.jsx';
import GuessGroup from './guess-group/guess-group.jsx';
import Keyboard from './keyboard/keyboard.jsx';

function App() {

  return (
    <>
      <Header></Header>
      <div className="body">
        <main className="main">
          <GuessGroup></GuessGroup>
          <GuessGroup></GuessGroup>
          <GuessGroup></GuessGroup>
          <GuessGroup></GuessGroup>
          <GuessGroup></GuessGroup>
          <GuessGroup></GuessGroup>
        </main>
        <aside className="aside">
          <Keyboard></Keyboard>
        </aside>
      </div>
    </>
  )
}

export default App
