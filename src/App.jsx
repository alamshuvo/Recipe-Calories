
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navigation from './components/Navigation/Navigation'
import OurRecepies from './components/OurRecepies/OurRecepies'
import SingleRecepies from './components/SingleRecepies/SingleRecepies'
import Cart from './components/Cart/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [recipes,setRecipes]=useState([]);
const [cook,setCook]=useState([]);
const [count,setCount]=useState(0);



useEffect(()=>{
  fetch('./fakeData.json')
  .then(res=>res.json())
  .then(data=>setRecipes(data))
},[]);

const handleAddToCook =(recepieCook)=> {
  const isExist=cook.find(c=>c.recipe_id ==recepieCook.recipe_id);
  if (!isExist) {
    setCook([...cook,recepieCook]); 
    setCount(count)   
  }
  else{
    toast.warn("Already Added")
  }

}





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
      <section className='p-3 mt-10 flex md:flex-row gap-10 flex-col'>
           <div className=' md:w-[60%]  '>
            <SingleRecepies recipes={recipes} handleAddToCook={handleAddToCook}></SingleRecepies>
           </div>
           <div className='md:w-[40%]'>
              <Cart cook={cook}></Cart>
           </div>
      </section>
      <ToastContainer></ToastContainer>
    </main>
      
      
 
    </>
  )
}

export default App
