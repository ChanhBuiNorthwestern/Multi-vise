import './SearchBar.css'

const SearchBar = () => (
    <div className="search-container">
        <input type="text" placeholder="Ask for advice..."></input>
        <button className='submit-button' type="submit">Submit</button>
    </div>
);

export default SearchBar;