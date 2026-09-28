type str = string;
type num = number;

type language = {
  iso639_1: str;
  iso639_2: str;
  name: str;
  nativeName: str;
};

type regionalBlocs = {
  acronym: str;
  name: str;
};

type currencies = {
  code: str;
  name: str;
  symbol: str;
};

type CountryT = {
  name: str;
  topLevelDomain: str[];
  alpha2Code: str;
  alpha3Code: str;
  callingCodes: str[];
  capital: str;
  altSpellings: str[];
  subregion: str;
  region: str;
  population: num;
  latlng: num[];
  demonym: str;
  area: num;
  timezones: str[];
  borders: str[];
  nativeName: str;
  numericCode: str;
  flags: {
    svg: str;
    png: str;
  };
  currencies: currencies[];
  languages: language[];
  translations: {
    br: str;
    pt: str;
    nl: str;
    hr: str;
    fa: str;
    de: str;
    es: str;
    fr: str;
    ja: str;
    it: str;
    hu: str;
  };
  flag: str;
  regionalBlocs: regionalBlocs[];
  cioc: str;
  independent: boolean;
};

type FilterT = {
  country: str;
  region: str;
};

type CountryCardT = {
  flag: str;
  region: str;
  name: str;
  population: num;
  capital: str;
  numericCode: str;
};

export type { CountryT, FilterT, CountryCardT };
