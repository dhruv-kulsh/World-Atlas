import { useEffect, useState, useTransition } from "react";

export const Country = () => {

    const [countries, setCountries] = useState([]);
    

    const getApiData = async () => {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
            const data = await res.json();
            console.log(`The data is `, data);
            setCountries(data);
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


    return (
        <>
            {countries.length > 0 ? <h1>{countries[0].name.common}</h1> : "Loading..."}
        </>
    )
}