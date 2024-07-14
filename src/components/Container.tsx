"use client";
import Card from "@/components/Card";
import { useCountry } from "@/context/CountryContext";

export default function Container(){

    const { filteredCountries } = useCountry();
    
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center py-8 gap-y-8 padding">
            {filteredCountries.map((country) => (
                <Card key={country.cca3} country={country} />
            ))}
        </div>
    )
}