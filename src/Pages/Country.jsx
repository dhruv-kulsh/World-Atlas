import { useEffect, useState } from "react";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {

    const [countries, setCountries] = useState([]);
    const [loader, setLoader] = useState(true);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const getApiData = async () => {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
            const data = await res.json();
            console.log(`The data is `, data);
            setCountries(data);
            setLoader(false);
            return data; // Not returning countries as it would not be updated
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        const promise = getApiData();
        // console.log(" Promise:- ", promise);
    }, []);

    // console.log(allCountryData);

    if (loader) {
        return <h1 className="loader">Loading...</h1>

    }

    const searchCountry = (country) => {
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        }

        return country
    }

    const filterRegion = (country) => {
        if(filter == "All") return country;
        if(filter.toLowerCase() == country.region.toLowerCase()){
            return country;
        }
    }

    const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));


    return (

        <section className="country-section">
            <SearchFilter search = {search} setSearch = {setSearch} filter = {filter} setFilter = {setFilter}
             countries = {countries} setCountries = {setCountries}/>
            <ul className="grid grid-four-cols">
                {
                    filterCountries.map((curcountry, index) => {
                        // return (
                        //         <ul key={index}>
                        //             <li>{curcountry.name.common}</li>
                        //             <li>{curcountry.population}</li>
                        //         </ul>
                        // )
                        return <CountryCard key = {index} country = {curcountry}/>
                    })
                }
            </ul>
        </section>
    )
}