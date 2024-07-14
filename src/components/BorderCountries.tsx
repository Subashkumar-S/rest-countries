import BorderCountry from "@/components/BorderCountry";

type BorderCountriesProps = {
    borderCountries: string[];
};

const BorderCountries: React.FC<BorderCountriesProps>= ({ borderCountries}) => {

    console.log("Border countries: ", borderCountries);
    return (
        <div className="flex gap-4 items-center flex-wrap">
            <h5 className=" text-lg basis-56">Border Countries :</h5>
            <ul className="flex gap-2 flex-wrap" >
                {borderCountries.length == 0 ?
                    <li>
                        <p>No borders</p>
                    </li> :
                    borderCountries.map((country, index) => (
                        <BorderCountry key={index} country={country} />
                    ))

                }
            </ul>
        </div>
    )
}

export default BorderCountries;