import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  )
}

export default App