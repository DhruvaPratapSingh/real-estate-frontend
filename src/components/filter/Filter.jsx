import "./filter.scss"

const Filter = () => {
  return (
    <div className="filter">
     <h1> Search results for <b>USA</b></h1>
     <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id="city" placeholder="city location"/>
        </div>
     </div>
     <div className="bottom">
     <div className="item">
          <label htmlFor="type">Type</label>
         <select name="type" id="type">
            <option value="any">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
         </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="any">any</option>
            <option value="Apartment">Apartment</option>
            <option value="house">House</option>
            <option value="Combo">Combo</option>
            <option value="Land">Land</option>
         </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id="minPrice" placeholder="any"/>
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" id="maxPrice" placeholder="any"/>
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="number" id="Bedroom" placeholder="any"/>
        </div>
        <button className="searchbtn">
            <img  src="/search.png" alt="search" />
        </button>
     </div>
    </div>
  )
}

export default Filter
