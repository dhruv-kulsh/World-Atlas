import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export const CountryDetails = () => {
    const params = useParams();
    console.log(params);

    const [country, setCountry] = useState([]);
    const [loader, setLoader] = useState(true);

    const getApiData = async () => {
        try {
            // https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags -- TO get all country data
            // https://restcountries.com/v3.1/name/Grenada?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags

            const res = await fetch(`https://restcountries.com/v3.1/name/${params}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
            const data = await res.json();
            console.log(`The data is `, data);
            setCountry(data);
            setLoader(false);
            return data;
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        const promise = getApiData();
    }, []);

    // console.log(allCountryData);

    if (loader) {
        return <h1 className="loader">Loading...</h1>

    }


    return (
        <>
            {
                country.map((indiCount, key) => {
                    return (
                        <ul key={key}>
                            <li>{indiCount.name.common}</li>
                        </ul>
                    )
                })
            }

        </>
    )

}