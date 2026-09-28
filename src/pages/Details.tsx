// component
import { Link } from "react-router-dom";

// icons
import { LeftArrow } from "../components/icons/Icons";

// hook
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useCountries } from "../context/CountryProvider";
import Spinner from "../components/shared/Spinner";
import Paragraph from "../components/shared/Paragraph";
import NotFound from "./NotFound";

export default function Details() {
  const { id } = useParams();
  const countries = useCountries();

  const country = useMemo(() => {
    if (countries.length === 0) return "loading";
    const target = countries.find((c) => c.numericCode === id);
    return target ? target : "not found";
  }, [id, countries]);

  return (
    <main className="flex-1 container mx-auto flex flex-col gap-8 text-d p-8">
      <Link
        to="/"
        role="button"
        aria-label="click to return to home page"
        className="w-25 flex p-1 gap-2 items-center justify-center bg-icon shadow-md text-text/50 transition-[color] hover:text-text"
      >
        <LeftArrow className="size-5" /> Back
      </Link>
      {country === "loading" ? (
        <Spinner />
      ) : country === "not found" ? (
        <NotFound />
      ) : (
        <section className="flex flex-col gap-8 justify-between lg:flex-row *:lg:w-[45%]">
          <img
            src={country.flag}
            alt={country.name + "flag"}
            className="object-cover h-100 shadow-lg"
          />
          <article className="flex flex-col justify-evenly gap-4">
            <h2 className="font-extrabold">{country.name}</h2>
            <div className="flex flex-col gap-4 sm:flex-row text-sm">
              <div className="flex-1 flex flex-col gap-2">
                <Paragraph variable="nativeName" value={country.nativeName} />

                <Paragraph
                  variable="population"
                  value={country.population.toLocaleString()}
                />

                <Paragraph variable="region" value={country.region} />

                <Paragraph variable="sub region" value={country.subregion} />

                <Paragraph variable="capital" value={country.capital} />
              </div>

              <div className="flex-1 flex flex-col gap-2 normal-case">
                <Paragraph
                  variable="Top Level Domain"
                  value={country.topLevelDomain[0]}
                />

                <Paragraph
                  variable="Currencies"
                  value={country.currencies.map((c) => c.name).join(", ")}
                />

                <Paragraph
                  variable="Languages"
                  value={country.languages.map((c) => c.name).join(", ")}
                />
              </div>
            </div>
            {country.borders && (
              <p className="flex gap-2 items-center text-sm">
                Border Countries:{" "}
                {country.borders
                  .slice(
                    0,
                    country.borders.length > 3 ? 3 : country.borders.length,
                  )
                  .map((c) => {
                    const target = countries.find(
                      (country) => country.alpha3Code === c,
                    );

                    return (
                      <Link
                        to={`/details/${target?.numericCode}`}
                        role="button"
                        aria-label="click to move to this country"
                        key={c}
                        className="max-w-40 p-2 rounded-md bg-icon overflow-hidden text-ellipsis text-nowrap text-text/50 shadow-md transition-[color] hover:text-text"
                      >
                        {target ? target.name : c}
                      </Link>
                    );
                  })}
              </p>
            )}
          </article>
        </section>
      )}
    </main>
  );
}
