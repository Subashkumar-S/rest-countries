import Link from "next/link";

export default function BorderCountry({country}){

    console.log(country);
    return(
        <Link href={`/country/${country}`} className="min-w-20 text-center px-2 py-1 rounded bg-darkBlue">{country}</Link>
    )
}