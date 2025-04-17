import { useParams, NavLink } from "react-router-dom"
import { useState, useEffect } from "react";

export const CountryDetails = () => {
    const params = useParams();
    console.log(params);

    const [country, setCountry] = useState();
    const [loader, setLoader] = useState(true);

    const getApiData = async () => {
        try {
            // https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags -- TO get all country data
            // https://restcountries.com/v3.1/name/Grenada?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags

            const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
            const data = await res.json();
            console.log(`The data is `, data[0]);
            setCountry(data[0]);
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

    // useEffect(() => {
    //     if(country)
    //     console.log(`this ${Object.keys(country.name.nativeName)}`);
    // }, [country])

    // console.log(allCountryData);

    if (loader) {
        return <h1 className="loader">Loading...</h1>

    }



    return (
        <section className="card country-details-card container">
            <div className="container-card bg-white-box">
                <div className="country-image grid grid-two-cols">
                    <img src={country.flags.svg} alt={country.flags.alt} className="flag" />
                </div>
                <div className="country-content">
                    <p className="card-title">{country.name.official}</p>
                    <div className="infoContainer">
                        <p>
                            <span className="card-description">Native Names: </span>
                            {
                                Object.keys(country.name.nativeName).map((key) => {
                                    return country.name.nativeName[key].common
                                }).join(", ")
                            }
                        </p>
                        <p>
                            <span className="card-description">Population:</span>
                            {country.population.toLocaleString()}
                        </p>
                        <p>
                            <span className="card-description">Region:</span>
                            {country.region}
                        </p>
                        <p>
                            <span className="card-description">Sub Region:</span>
                            {country.subregion}
                        </p>
                        <p>
                            <span className="card-description">Sub Region:</span>
                            {country.capital[0]}
                        </p>
                        <p>
                            <span className="card-description">Top Level Domain:</span>
                            {country.tld[0]}
                        </p>
                        <p>
                            <span className="card-description">Currencies:</span>
                            {/* {country.currencies.INR.name}  Will be applicable if only 1 currency is there */}
                            {Object.keys(country.currencies).map((currElem) => {
                                return country.currencies[currElem].name
                            })}
                        </p>
                        <p>
                            <span className="card-description">Languages:</span>
                            {
                                Object.keys(country.languages).map((currElem) => {
                                    return country.languages[currElem]
                                }).join(", ")
                            }
                        </p>
                    </div>
                </div>
                <div className="country-card-backBtn">
                    <NavLink to="/country" className="backBtn">
                        <button>Back</button>
                    </NavLink>
                </div>
            </div>
        </section>
    )


}