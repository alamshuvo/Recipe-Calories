
import './App.css'
import Banner from './components/Banner/Banner'
import Navigation from './components/Navigation/Navigation'
import OurRecepies from './components/OurRecepies/OurRecepies'

function App() {













  return (
    <>
    <nav className='container mx-auto'>
    <Navigation></Navigation>
    </nav>
    <main className='container mx-auto'>
      <section className=' p-3 mt-10 lexend'>
        <Banner></Banner>
      </section>
      <section className=' p-3 mt-10 lexend'>
        <OurRecepies></OurRecepies>
      </section>
    </main>
      
      
 
    </>
  )
}

export default App
