import { CgProfile } from "react-icons/cg";
const Navigation = () => {
  return (
    <div>
      <div>
        <div className="navbar bg-base-100 flex justify-between lexend">
          <div className="">
            <a className="btn btn-ghost md:text-2xl text-[#150B2B] font-bold ">Recipe Calories</a>
          </div>
          <div className="md:flex gap-5 hidden text-[#150b2bb3]">
        <a href="">Home</a>
        <a href="">Recipes</a>
        <a href="">About</a>
        <a href="">Search</a>
         </div>

          <div className=" gap-2">
        
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto md:rounded-full"
              />
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
