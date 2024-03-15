

const Cart = ({cook}) => {
    console.log(cook);
    return (
        <div>
            <div className="mb-5 p-5">
                <h1 className="text-center font-bold text-2xl mb-5 lexend border-b-2">Want To Cook : 0</h1>
                <table className="w-full text-[#878787] fira-sans ">
                    <thead>
                       
                    <tr>
                        <th>Count</th>
                        <th>Name</th>
                        <th>Time</th>
                         <th>Calories</th>
                         <th>Preparing Button</th>
                    </tr>
                            
                                {
                                    cook.map((a,idx)=>(
                                      <tr key={idx} className="bg-gray-500 text-white rounded-2xl ">
                                         <th>{idx+1}</th>
                                          <th>{a.recipe_name}</th>
                                        <th>{a.preparing_time}</th>
                                        <th>{a.calories}</th>
                                        <button className="btn bg-green-500 text-white"> Preparing</button>
                                      </tr>
                                      
                                    ))
                                }
                            
                           
                        
                    </thead>
                </table>
            </div>
            <div className="mb-5 p-5">
                <h1 className="text-center font-bold text-2xl mb-5 lexend border-b-2">Currently cooking: 02</h1>
                <table className="w-full text-[#878787] fira-sans">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                </table>
            </div>
            
        </div>
    );
};

export default Cart;