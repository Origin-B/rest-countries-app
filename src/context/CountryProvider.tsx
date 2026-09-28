import {
  useContext,
  useEffect,
  createContext,
  useState,
  type ReactNode,
} from "react";

// type
import { type CountryT } from "../type/type";

const countryContext = createContext<CountryT[]>([]);

export default function CountryProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<CountryT[]>([]);

  async function getCountriesData(url: string) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("No Data Found");
      const data: CountryT[] = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountriesData("/fetchData.json");
  }, []);

  return (
    <countryContext.Provider value={countries}>
      {children}
    </countryContext.Provider>
  );
}

const useCountries = () => useContext(countryContext);

export { useCountries };
