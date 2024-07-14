import Link from "next/link";

type BorderCountryProps = {
    country: string; 
};

const BorderCountry: React.FC<BorderCountryProps> = ({country}) => {
    const countryLink = `/country/${country}`; 
    return(
        <Link href={countryLink} className="min-w-20 text-center px-2 py-1 rounded bg-white text-veryDarkBlue dark:bg-darkBlue dark:text-white shadow-lg shadow-gray-400 dark:shadow-gray-800">{country}</Link>
    )
}

export default BorderCountry;