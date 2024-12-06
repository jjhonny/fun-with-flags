import { Card, Footer, Grid, Header } from "./components";

const countris = [
  {
    country: "Brazil",
    capital: "Brasilia",
    region: "South America",
    population: "24000000",
  },
  {
    country: "Canada",
    capital: "Ottawa",
    region: "North America",
    population: "37000000",
  },
  {
    country: "United States",
    capital: "Washington",
    region: "North America",
    population: "328000000",
  },
  {
    country: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: "83000000",
  },
  {
    country: "France",
    capital: "Paris",
    region: "Europe",
    population: "67000000",
  },
  {
    country: "Italy",
    capital: "Rome",
    region: "Europe",
    population: "60000000",
  },
  {
    country: "China",
    capital: "Beijing",
    region: "Asia",
    population: "1400000000",
  },
  {
    country: "Japan",
    capital: "Tokyo",
    region: "Asia",
    population: "126000000",
  },
  {
    country: "Australia",
    capital: "Canberra",
    region: "Oceania",
    population: "25000000",
  },
  {
    country: "South Africa",
    capital: "Pretoria",
    region: "Africa",
    population: "60000000",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Grid>
          {countris.map(({ country, capital, region, population }) => (
            <Card
              key={country}
              country={country}
              capital={capital}
              region={region}
              population={population}
            />
          ))}
        </Grid>
      </main>
      <Footer />
    </>
  );
}
