
import './App.css'
import Banner from './components/Banner/Banner'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <>
    <nav className='container mx-auto'>
    <Navigation></Navigation>
    </nav>
    <main>
      <section className='container mx-auto p-3 mt-10 lexend'>
        <Banner></Banner>
      </section>
    </main>
      
      
 
    </>
  )
}

export default App
