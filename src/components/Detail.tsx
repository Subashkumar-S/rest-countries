"use client";
import { useState, useEffect } from "react";
import BorderCountries from "@/components/BorderCountries";
import CountryDetails from "@/components/CountryDetails";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Country } from "@/types/types";


const Detail = () => {
    const {id} = useParams();
    const [country, setCountry] = useState<Country | null>(null);
    const [borderCountries, setBorderCountries] = useState<string[]>([]);

    console.log(id);
    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
            console.log("Response from data:", response.data);
            setCountry(response.data[0]);
            setBorderCountries(response.data[0]?.borders || []);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, [id]);
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between padding gap-28">
            <Image src={country?.flags?.png || ""} alt="flag" height={56} width={72} className="w-72 h-56 sm:w-[40vw] sm:h-[28vw]" />
            <div className="sm:w-1/2 flex flex-col gap-6">
                <CountryDetails country={country}/>
                <BorderCountries borderCountries={borderCountries} />
            </div>
        </div>

    )
}

export default Detail;