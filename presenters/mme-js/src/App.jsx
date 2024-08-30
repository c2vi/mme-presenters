import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './TopBar.jsx'
import SideBar from './SideBar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const tabs = [
    [ 'Files', 'Search', 'Git', 'Debug', 'Extensions', 'Settings', ],
    [ 'Files', 'Search', 'Git', 'Debug', 'Extensions', 'Settings', ],
    [ 'Files', 'Search', 'Git', 'Debug', 'Extensions', 'Settings', ],
    [ 'Files', 'Search', 'Git', 'Debug', 'Extensions', 'Settings', ],
    [ 'Files', 'Search', 'Git', 'Debug', 'Extensions', 'Settings', ],
  ];

  return (
    <>
	  	<TopBar />
   	<SideBar tabs={tabs} />
    </>
  )
}

export default App
