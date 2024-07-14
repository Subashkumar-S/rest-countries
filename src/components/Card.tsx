import Image from "next/image";
import Link from "next/link";
// import PropTypes from "prop-types";

type Country = {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  cca3: string;
};

type CardProps = {
  country: Country;
};

const Card: React.FC<CardProps> = ({ country }) => {
  return (
    <Link href={`/country/${country.cca3}`}>
      <div className="w-60 bg-white text-veryDarkBlue dark:bg-darkBlue dark:text-white rounded">
        <Image
          src={country.flags.png}
          alt="flag"
          width={60}
          height={40}
          className="w-60 h-40 rounded-t"
        />
        <div className="px-4 py-4 flex flex-col gap-2">
          <h4 className="font-[800] text-xl">{country.name.common}</h4>
          <p>{country.population}</p>
          <p>{country.region}</p>
          {Array.isArray(country.capital) ? (
            <p>{country.capital.join(", ")}</p>
          ) : (
            <p>{country.capital}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

// Card.propTypes = {
//   country: PropTypes.shape({
//     flags: PropTypes.shape({
//       png: PropTypes.string.isRequired,
//     }).isRequired,
//     name: PropTypes.shape({
//       common: PropTypes.string.isRequired,
//     }).isRequired,
//     population: PropTypes.number.isRequired,
//     region: PropTypes.string.isRequired,
//     capital: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.arrayOf(PropTypes.string),
//     ]).isRequired,
//     cca3: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Card;
