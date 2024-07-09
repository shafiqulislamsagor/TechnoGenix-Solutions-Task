import './App.css'
import Dashboard from './page/Dashboard'
import Navbar from './shared/Navbar/Navbar'

function App() {

  return (
    <div className='min-h-screen w-full bg-gray-900 text-white'>
      <Navbar/>
      <Dashboard/>
    </div>
  )
}

export default App