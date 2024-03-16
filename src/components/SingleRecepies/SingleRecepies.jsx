import { FaRegClock, FaGripfire } from "react-icons/fa";
const SingleRecepies = ({recipes, handleAddToCook}) => {
  console.log(recipes);
    return (
    <div>
      <div className="grid md:grid-cols-2 gap-5  grid-cols-1">
        {
            recipes.map((item,idx)=>(
                <div key={idx}>
                    <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={item.recipe_image
              }
              alt="Shoes"
              className="rounded-xl h-[300px] object-cover"
            />
          </figure>
          <div className="card-body  space-y-10  md:text-start">
            <h2 className="card-title text-start text-[#282828] lexend font-semibold text-[20px]">{item.recipe_name}</h2>
            <p className="border-b-2 text-[#878787] fira-sans ">{item.short_description}</p>
            
           <div className="text-start border-b-2">
           <h1 className="mb-5 text-[#282828] lexend text-[18px]">Ingridiants : {(item.ingredients).length}</h1>

            {
                
                (item.ingredients).map((a,idx)=>(<li className="text-[#878787] mb-2 fira-sans" key={idx}>{a}</li>
                ))
            }
           </div>
           <div className="flex items-center fira-sans">
            <p className="flex  items-center gap-5"> <FaRegClock></FaRegClock> {item.preparing_time} min</p>
            <p className="flex  items-center gap-5"> <FaGripfire></FaGripfire> {item.calories} calories</p>
           </div>
           <div className="card-actions">
              <button onClick={()=>handleAddToCook(item)} className="btn bg-green-500 rounded-full text-black">Want To Cook </button>
            </div>
          </div>
         
        </div>
                </div>
            ))
        }
        
      </div>
    </div>
  );
};

export default SingleRecepies;
