import './SearchBar.css'

function getVal(){
    var userQuestion = document.getElementById('questionField').value;
    // var question = document.getElementById("questionField");
    // this.questionField = ''; // only needed maybe if we keep search bar after submit
    console.log(userQuestion);
} //need to funnel userQuestion into the API call now i think??

const SearchBar = () => (
    <div className="search-container">
        <input id="questionField" type="text" placeholder="Ask for advice..."></input>
        {/* <button className='submit-button' type="submit" Onclick={this.getVal}>Submit</button> */}
        {/* <button id="subButton" className='submit-button' type="submit" onlick='getVal()'>Submit</button> */}
        <button id="subButton" className='submit-button' type="submit" onClick={getVal}>Submit</button>
    </div>
);
// var subButton = document.getElementById('subButton');
// subButton.addEventListener('click', getVal, false); 

export default SearchBar;