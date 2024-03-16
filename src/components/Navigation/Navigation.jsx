import { CgProfile } from "react-icons/cg";
const Navigation = () => {
  return (
    <div>
      <div>
        <div className="navbar bg-base-100 flex justify-between lexend">
          <div className="">
            <a className="btn btn-ghost md:text-2xl text-[#150B2B] font-bold ">Simply Recipes</a>
          </div>
          <div className="md:flex gap-5 hidden text-[#150b2bb3]">
        <a href="">Home</a>
        <a href="">Recipes</a>
        <a href="">About</a>
        <a href="">Search</a>
         </div>

          <div className=" gap-2">
        
            <div className="form-control flex">
             
            
            <label className="input input-bordered w-24 md:w-auto md:rounded-full flex items-center ">
  <input type="text" className=" input-bordered w-24"  placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
              

            
               
            </div>
            <div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost bg-green-300 btn-circle avatar"
              >
                <div className="  rounded-full ">
                  <CgProfile className="text-center text-xl md:text-2xl"></CgProfile>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
