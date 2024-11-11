import { Link } from "react-router-dom"
import "./card.scss"
const Card = ({item}) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={`${item.img}`}/>
      </Link>
      <div className="textContainer">
        <h2 className="title">
            <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
            <img src="/pin.png" alt=""/>
            <span>{item.address}</span>
        </p>
        <p className="price">${item.price}</p>
        <button className="bottom">
            <div className="features">
                <div className="feature">
                    <img src="/bed.png" alt=""/>
                    <spna>{item.bedroom} bedrooms</spna>
                </div>
                <div className="feature">
                    <img src="/bath.png" alt=""/>
                    <spna>{item.bathroom} bathrooms</spna>
                </div>
            </div>
            <div className="icons">
                <div className="icon">
                    <img src="/save.png" alt=""/>
                </div>
                <div className="icon">
                    <img src="/chat.png" alt=""/>
                </div>
            </div>
        </button>
      </div>
    </div>
  )
}

export default Card
