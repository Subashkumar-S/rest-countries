export default function CountryDetails({ country }) {
    console.log(country);
    return (
        <div className="flex flex-col gap-6 mb-2">
            <h2 className="font-black text-3xl">{country?.name?.official}</h2>
            <div className="flex flex-col sm:flex-row text-lg gap-2 sm:gap-4 flex-wrap leading-10">
                <ul className="">
                    <li>
                        <p>
                            <strong className="pr-2">Native Name:</strong>
                            {country?.name?.official}
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong className="pr-2">Population:</strong>
                            {country?.population}
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong className="pr-2">Region:</strong>
                            {country?.region}
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong className="pr-2">Sub Region:</strong>
                            {country?.subregion}
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong className="pr-2">Capital:</strong>
                            {country?.capital[0]}
                        </p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>
                            <strong>Top Level Domain:</strong>
                            {country?.tld?.[0]}
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong className="pr-2">Currencies:</strong>
                            {Object.entries(country?.currencies || {}).map(([currencyCode, currency]) => (
                                <span key={currencyCode}>{currency.name} ({currency.symbol})</span>
                            ))}
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong className="pr-2">Languages:</strong>
                            {Object.values(country?.languages || {}).join(', ')}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
