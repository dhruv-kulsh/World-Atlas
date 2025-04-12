import { useEffect, useState, useTransition } from "react";
import { CountryCard } from "../components/Layout/CountryCard";

export const Country = () => {

    const [countries, setCountries] = useState([]);
    const [loader, setLoader] = useState(true);

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


    return (

        <section className="country-section">
            <ul className="grid grid-four-cols">
                {
                    countries.map((curcountry, index) => {
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