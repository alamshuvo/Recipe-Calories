
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
const [acount,setAcount]=useState(0);
const [acook,setAcook]=useState([]);
const [total,setTotal]=useState(0);
const[caloriesTotal,setCaloriesTotal]=useState(0);



useEffect(()=>{
  fetch('./fakeData.json')
  .then(res=>res.json())
  .then(data=>setRecipes(data))
},[]);

const handleAddToCook =(recepieCook)=> {
  const isExist=cook.find(c=>c.recipe_id ==recepieCook.recipe_id);
  if (!isExist) {
    setCook([...cook,recepieCook]); 
    setCount(count+1)   
  }
  else{
    toast.warn("Already Added")
  }

}



const handlePrepraing=(preparing)=>{
  console.log(preparing);
  const remaining=cook.filter(c=>c.recipe_id !==preparing.recipe_id);
  const a=acook.reduce((p,c)=>(p+c.preparing_time),preparing.preparing_time);
  const caloriesTotal=acook.reduce((p,c)=>(p+c.calories),preparing.calories)
  
 
if (remaining) {
  setCook(remaining);
   
  setCount(count-1);
}
  const isExist=cook.find(c=>c.recipe_id ==preparing.recipe_id);

   if (isExist) {
    setAcook([...acook,preparing]); 
    setAcount(acount+1)   ;
    setTotal(a)  
    setCaloriesTotal(caloriesTotal);  
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
              <Cart cook={cook} count={count} acount={acount} handlePrepraing={handlePrepraing} acook={acook} total={total}
               caloriesTotal={caloriesTotal}
               ></Cart>
           </div>
      </section>
      <ToastContainer></ToastContainer>
    </main>
      
      
 
    </>
  )
}

export default App
