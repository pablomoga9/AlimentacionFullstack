import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';


function Restaurants() {



  const [dataRestaurants, setDataRestaurants] = useState([])
  const [currentItems] = useState(null);

  async function loadDataRestaurants() {
    let res = await axios.get("https://nasaapinacholopez.herokuapp.com/api/astronomy/neas?to=2022")
    let data = res.data
    setDataRestaurants(data)
    console.log(dataRestaurants);
  }

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <RestaurantCard key={i} item={item} index={i}/>
          ))}
      </>
    );
  }



  useEffect(() => {

   loadDataRestaurants()
// eslint-disable-next-line
  }, [])

  

  return (
    <section>
      <h1>Restaurants</h1>
    

      <ul >

        <Items currentItems={currentItems} />


      </ul>

       


    </section>
  )
}

export default Restaurants