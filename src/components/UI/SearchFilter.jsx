export const SearchFilter = ({search, setSearch, filter, setFilter}) => {
    console.log(search);

    const handleSelectChange = (event) => {
        event.preventDefault();
        console.log(`Change Filter:- ${event.target.value}`);
        
    }
    
    return (
        <section className="section-searchFilter container">
            <input type="text" placeholder="Search Country" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div>
                <select className="select-section" value="All" onChange={handleSelectChange}>
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