"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useCountry } from '../context/CountryContext';

export default function Filter() {

    const [clicked, setClick] = useState(false);
    const { selectedRegion, setSelectedRegion } = useCountry();

    const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

    const handleClick = () => {
        setClick(!clicked);
    }

    const handleRegionSelect = (region: string) => {
        setSelectedRegion(region); 
        setClick(false); 
      };

    return (
        <div className="w-48 py-2 ml-5">
            <div className="w-full h-14 flex items-center justify-between px-6 bg-darkBlue rounded mb-1">
                <p> {selectedRegion !== 'All' ? selectedRegion : 'Filter by region'}</p>
                <button onClick={handleClick}>
                    <FaAngleDown className="buttonSize text-White" />
                </button>
            </div>
            <ul className={`bg-darkBlue rounded absolute w-48 flex flex-col ${clicked ? ' opacity-100 visible transition ease-out duration-500': ' opacity-0 invisible transition ease-in duration-300'} `}>
                {
                    regions.map((region) => (
                        <li key={region} onClick={() => handleRegionSelect(region)} className="h-14 flex items-center justify-center hover:bg-veryDarkBlue">{region}</li>
                    ))
                }
            </ul>
        </div>
    )
}