import Hero from './components/Hero'
import NavBar from './components/Navbar'
import Card from './components/Card'
import data from './data.js'

function App() {
  const experience = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item} // or {...item} but removing the ".item" in the card component
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    )
  })
  return (
    <>
      <NavBar />
      <Hero />
      <section className="cards-list">{experience}</section>
    </>
  )
}

export default App
