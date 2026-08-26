import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
// import App from './App.tsx'
// import RockPaperScissors from './RockPaperScissors.tsx';
// import TicTacToe from './TicTacToe.tsx';
// import Hangman from './HangMan.tsx';
// import AboutUs from './AboutUs.tsx'
// import HooksInReact from './hooks.tsx'
// import AutomaticCounter from './auto-counter'
import StaleClosure from './stale-Closures'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      {/*<App />*/}
      {/*<AboutUs />*/}
      {/*<RockPaperScissors />*/}
      {/*<TicTacToe />*/}
      {/*<Hangman/>*/}
      {/*<HooksInReact />*/}
      {/*<AutomaticCounter />*/}
      <StaleClosure />
    </div>
  </StrictMode>,
)
