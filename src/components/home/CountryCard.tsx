// component
import { Link } from "react-router-dom";
import Paragraph from "../shared/Paragraph";
// type
import type { CountryCardT } from "../../type/type";

export default function CountryCard({ country }: { country: CountryCardT }) {
  const { capital, flag, name, region, population, numericCode } = country;
  return (
    <Link
      to={`details/${numericCode.toLocaleLowerCase()}`}
      aria-label="click to move to details page"
    >
      <article className="w-[clamp(200px,200px+6.5vw,250px)] h-80 bg-icon shadow-md rounded-md overflow-hidden flex flex-col gap-4 transition-transform hover:scale-110">
        <img
          src={flag}
          alt={`${name} flag`}
          className="object-cover w-full h-40"
        />

        <h3 className="font-bold px-4 text-nowrap text-ellipsis overflow-hidden">
          {name}
        </h3>
        <div className="px-4">
          <Paragraph
            variable="population"
            value={population.toLocaleString()}
          />
          <Paragraph variable="region" value={region} />
          <Paragraph variable="capital" value={capital} />
        </div>
      </article>
    </Link>
  );
}
