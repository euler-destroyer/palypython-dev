// Search bar component

const SearchBar = props => {
    // Methods

    function onChange(event) {
        props.updateQuery(event.target.value)
    }

    // Render

    return (
        <>
            <div className = "search-container">
                <input type = "text" className = "search-bar" onChange = {onChange} />
                <div className = "search-button">
                    <i className = "fas fa-search"></i>
                </div>
            </div>
            <style jsx>{`
                .search-container {
                    position: relative;
                }

                .search-bar {
                    width: 100%;
                    border-radius: 8px;
                    padding: 7px 50px 7px 15px;
                    border: 1px solid rgb(200, 200, 220);
                    font-size: 1rem;
                    transition-duration: 0.2s;
                    margin-bottom: 20px;
                }
                
                .search-bar:focus {
                    border-color: rgb(38, 145, 252);
                    box-shadow: 0 0 0 3px rgba(0, 142, 255, 0.3);
                }

                .search-button {
                    position: absolute;
                    top: 1px;
                    right: 1px;

                    height: 32.5px;
                    width: 35px;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    border: none;
                    border-left: 1px solid rgb(200, 200, 220);
                    border-radius: 0 7.2px 7.2px 0;

                    font-size: 1rem;
                    background-color: rgb(237,242,247);
                    transition-duration: 0.2s;
                    pointer-events: none;
                }
            `}</style>
        </>
    )
}

// Exports

export default SearchBar