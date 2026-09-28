// data
import { regionArr } from "../../../public/data";

// icon
import { SearchIcon, ChevronArrow } from "../icons/Icons";

// hook
import { useState } from "react";

// type
import { type FilterT } from "../../type/type";

export default function Filter({
  filter,
  setFilter,
}: {
  filter: FilterT;
  setFilter: (filter: FilterT) => void;
}) {
  const [active, setActive] = useState(false);

  function handelFilter(id: string, value: string): void {
    setFilter({ ...filter, [id]: value });
  }

  return (
    <>
      <div className="flex-1 flex p-2 rounded-md shadow-sm max-w-100 items-center bg-icon">
        <SearchIcon className="size-5 m-3" />

        <input
          id="country"
          type="text"
          className="flex-1 p-1 focus:outline-none"
          placeholder="Search for a country..."
          value={filter.country}
          onChange={(e) => handelFilter(e.target.id, e.target.value)}
        />
      </div>
      <div className="w-60 relative *:w-full">
        <button
          className="flex justify-between items-center bg-icon shadow-sm p-4 rounded-md"
          aria-label="click to open region filter menu"
          onClick={() => setActive((prev) => !prev)}
        >
          Filter by Region
          <ChevronArrow
            className={`size-5 transition-all cursor-pointer ${active ? "rotate-180" : "rotate-none"}`}
          />
        </button>
        <ul
          data-region-filter={active}
          className={`absolute left-0 top-15 flex flex-col gap-2 bg-icon shadow-sm rounded-md scrollbar-thin scrollbar-thumb-text transition-all text-text/60 ${active ? "h-45 overflow-auto" : "h-0 overflow-hidden"} *:px-4 *:first:mt-4 *:last:mb-4 *:cursor-pointer *:hover:text-text`}
        >
          <li
            className={`${filter.region === "all" && "font-semibold text-text"}`}
            onClick={() => handelFilter("region", "all")}
          >
            all
          </li>

          {regionArr.map((r: string, i: number) => (
            <li
              key={`${r}-${i}`}
              className={`${filter.region === r && "font-semibold text-text"}`}
              onClick={() => handelFilter("region", r)}
            >
              {r}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
