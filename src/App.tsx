import './App.css'
import { Navbar } from './components'
import { Home } from './pages/Home'
import { LayoutContainer } from './styled-components/layout.styled.componet'

function App() {

  return (
    <>
      <Navbar/>
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </>
  )
}

export default App
