// import React from 'react'
import Tour from "./Tour"
const Tours = (props) => {
    // console.log(props.remove)
  const data = props.data
//   console.log(data)
    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="title-underline"></div>
                <div className="tours">
                    {data.map((data)=>{
                        return <Tour key ={data.id} data = {data} remove={props.remove}/>
                    })}
                </div>
            </div>
        </section>
    
  )
}

export default Tours
