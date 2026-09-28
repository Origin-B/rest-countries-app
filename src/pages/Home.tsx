// hook
import { useState, useMemo, useEffect } from "react";
import { useCountries } from "../context/CountryProvider";

// component
import Filter from "../components/home/Filter";
import CountryCard from "../components/home/CountryCard";
import Spinner from "../components/shared/Spinner";

export default function Home() {
  const [filter, setFilter] = useState(() => {
    const save = localStorage.getItem("filter");
    return save
      ? JSON.parse(save)
      : {
          country: "",
          region: "all",
        };
  });

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [filter]);

  const countries = useCountries();

  const filteredCountries = useMemo(
    () =>
      countries
        .filter((c) =>
          filter.region === "all" ? true : c.region === filter.region,
        )
        .filter((c) =>
          filter.country !== ""
            ? c.name
                .toLocaleLowerCase()
                .includes(filter.country.toLocaleLowerCase().trim())
            : true,
        ),
    [filter, countries],
  );

  return (
    <main className="container mx-auto my-6 p-4 text-h flex flex-col gap-8 ">
      <section className="flex flex-col gap-8 sm:flex-row justify-between">
        <Filter filter={filter} setFilter={setFilter} />
      </section>

      <section className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {countries.length !== 0 ? (
          filteredCountries.map((c, i) => (
            <CountryCard country={c} key={c.name + "-" + i} />
          ))
        ) : (
          <Spinner />
        )}
      </section>
    </main>
  );
}
