import { useState } from "react"


const Tour = ({data, remove}) => {
   const [remov,setRemove] =useState(false);
   const [read,setRead] = useState(true);

   const change = ()=>{
    setRead(!read);
   }
   const letsGo = ()=>{
    remove(data.id)
   }
  return <article className="single-tour">
    <img src={data.image} alt='tour' className="img"/>
    <span className="tour-price">R{data.price}</span>
    <div className="tour-info">
      <p>{read ? `${data.info.substring(0,200)}...`:data.info}</p>
      <button onClick={change}>{read ? "read more": "see less"}</button>
    </div>
    <button onClick={letsGo} className="btn btn-block">remove</button>
  </article>
}

export default Tour
