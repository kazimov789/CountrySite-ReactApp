import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const CountryDetail = () => {
    const {id} = useParams()
    const [country,SetCountry] = useState();
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${id}`)
        .then((res)=>SetCountry(res.data[0]))
        .catch((err)=>console.log(err))
    },[])
    country && console.log(country);
  return (
      country ?
<div className="container mt-2">
    <div className="row">
        <div className="col-lg-6">
            <img src={country.flags.png}/>
        </div>
        <div className="col-lg-6">
            
        </div>
    </div>
</div> : "..loading"
    )
}

export default CountryDetail