export const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
    console.log(search);

    const handleSelectChange = (event) => {
        event.preventDefault();
        console.log(`Change Filter:- ${event.target.value}`);
        setFilter(event.target.value)

    }

    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
            return value === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
        });
        setCountries(sortCountry);
    }

    return (
        <section className="section-searchFilter container">
            <input type="text" placeholder="Search Country" value={search} onChange={(e) => setSearch(e.target.value)} />

            <div>
                <button onClick={() => sortCountries("asc")}>Asc</button>
            </div>

            <div>
                <button onClick={() => sortCountries("desc")}>Desc</button>
            </div>

            <div>
                <select className="select-section" value={filter} onChange={handleSelectChange}>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}