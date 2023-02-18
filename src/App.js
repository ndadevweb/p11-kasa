import { Outlet } from 'react-router-dom';
import { Header, Navigation, Logo, Footer } from './components'
import { TYPE } from './components/Logo/Logo'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <Header>
          <Logo type={ TYPE.primary } responsiveClass={ true } />
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