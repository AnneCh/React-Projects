import Footer from './components/Footer'
import About from './components/About'
import Interests from './components/Interests'
import Info from './components/Info'
import Warning from './components/Warning'

function App() {
  return (
    <>
      <div className="main-card">
        <Info />
        <About />
        <Warning />
        <Interests />
        <Footer />
      </div>
    </>
  )
}

export default App
