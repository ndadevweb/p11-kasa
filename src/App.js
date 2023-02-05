import { Outlet } from 'react-router-dom';
import './App.css'
import { Header, Navigation, Logo, Footer } from './components'
import { TYPE } from './components/Logo/Logo'

function App() {
  return (
    <>
      <div className="container">
        <Header>
          <Logo type={ TYPE.primary } />
          <Navigation />
        </Header>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer>
        <Logo type={ TYPE.secondary } />
      </Footer>
    </>
  );
}

export default App