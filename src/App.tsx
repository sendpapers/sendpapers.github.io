import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)
  // var chkver = WebApp.version
  WebApp.ready();


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/*<p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>*/}
      </div>
      {/*<div className="card">
        <button onClick={() => chkver = WebApp.version}>
          Version is {chkver}
        </button>
      </div>*/}
      {/*<p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
      
        <iframe src="https://www.google.com/maps/d/embed?mid=11or2lgzlYn4eVsfcxZ-YsUCtd_hmXf8&ehbc=2E312F" width="100%" height="400px"></iframe>
      
    </>
  )
}

export default App
