import Hero from './components/Hero'
import NavBar from './components/Navbar'
import Card from './components/Card'
import data from './data.js'

function App() {
  const experience = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })
  return (
    <>
      <NavBar />
      <Hero />
      {experience}
    </>
  )
}

export default App
