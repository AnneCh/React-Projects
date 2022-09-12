import Hero from './components/Hero'
import NavBar from './components/Navbar'
import Card from './components/Card'
import katie from './components/Katie.png'
import wedding from './components/wedding.png'
import bike from './components/bike.png'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Card
        img={katie}
        grade={5}
        review={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
      <Card
        img={wedding}
        alt="wedding"
        grade={5}
        review={30}
        country="USA"
        title="Learn wedding photography"
        price={125}
      />
      <Card
        img={bike}
        alt="bike"
        grade={4.8}
        review={2}
        country="USA"
        title="Bike riding in mountains"
        price={50}
      />
    </>
  )
}

export default App
