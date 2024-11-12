import { useState } from "react"
import "./slider.scss"

const Slider = ({images}) => {
  const [imgidx,setimgidx]=useState(null);
  return (
    <div className="slider">
   {imgidx!==null && ( <div className="fullSlider">
      <div className="arrow">
        <img src="/arrow.png" alt="" onClick={()=>setimgidx(imgidx >= 1 ? imgidx - 1 : 0)}/>
      </div>
        <div className="imgContainer">
          <img src={images[imgidx]} alt="" />
        </div>
        <div className="arrow">
        <img src="/arrow.png" alt="" className="right" onClick={()=>setimgidx(imgidx <images.length-1 ? imgidx + 1 : 0)}/>
        </div>
        <div className="close" onClick={()=>setimgidx(null)}>X</div>
    </div>)}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={()=>{setimgidx(0)}}/>
      </div>
      <div className="smallImages">
        {
          images.slice(1).map((image,index)=>(
            <img src={image} alt="" key={index} onClick={()=>{setimgidx(index+1)}}/>
          ))
        }
      </div>
    </div>
  )
}

export default Slider
