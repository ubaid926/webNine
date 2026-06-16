import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AppNav from './components/nav'
import HeroSectionFullWidth from './components/heroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <AppNav />
      <HeroSectionFullWidth />

    </>
  )
}

export default App
{/* <div class="absolute left-1/2 h-[768px] w-[250%] -translate-x-2/4 md:h-[1035px] md:w-[200%] lg:h-[1035px] lg:w-[200%] xl:h-[1936px] xl:w-[200%] clip-bottom-large-circle bg-neutrals-0 bottom-0"></div> */ }