import TravelCard from './components/Card'
import NavBar from './components/Navbar'
import data from './data.js'

function App() {
  const experience = data.map((item) => {
    return <TravelCard key={item.id} item={item} />
  })

  return (
    <>
      <NavBar />
      <div>{experience}</div>
    </>
  )
}

export default App
