import { useParams } from "react-router-dom"

export const CountryDetails = () => {
    const params = useParams();
    console.log(params);

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
    

    return <h1>Heloo detsial</h1>
    
}