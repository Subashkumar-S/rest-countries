import React, { ChangeEvent } from 'react';
import { IoSearch } from "react-icons/io5";
import { useCountry } from '../context/CountryContext';

export default function Search(){

    const { setSearchQuery } = useCountry();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

    return(
        <form className="bg-darkBlue flex items-center gap-2 w-[90%] sm:w-80 max-sm:mx-auto rounded  p-2 max-sm:my-6" >
            <IoSearch className="buttonSize" />
            <input name="countries" placeholder="Search by country" className="outline-none border-none bg-transparent" onChange={handleInputChange}/>
        </form>
    )
}