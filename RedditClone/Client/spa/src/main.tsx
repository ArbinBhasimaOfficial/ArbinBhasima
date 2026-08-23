import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
// import App from './App.tsx'
import RockPaperScissors from './RockPaperScissors.tsx';
// import AboutUs from './AboutUs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      {/*<App />*/}
      {/*<AboutUs />*/}
      <RockPaperScissors />
    </div>
  </StrictMode>,
)
