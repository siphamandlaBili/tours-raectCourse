import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loader from "./Loader";
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [user,setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
 
  const removeTours = (id)=>{
    const notMoved = user.filter((ide)=>{
      return id !== ide.id
    })
    setUsers(notMoved);
  }
  const fetchTours = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(url);
      const tours = await response.json();
      setUsers(tours);
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(()=>{
    

    fetchTours();
    
  },[])
  
  // const tourDta = user.map((element)=>{
  //   return <Tour data = {element} key={element.id}/>
  // })
  
 if(isLoading){
   return <main>
    <Loader/>
   </main>
 }

 if(user.length == 0){
  //  setIsLoading(true)
   return  <section>
            <div className="title">
                <h2>no tours left</h2>
                <div className="title-underline"></div>
                <div className="tours" style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                    <button onClick={fetchTours} className="btn">refresh</button>
                </div>
            </div>
        </section>
   
 }
  return <main>
    
    <Tours data={user} remove={removeTours}/>
  </main>;
};
export default App;
