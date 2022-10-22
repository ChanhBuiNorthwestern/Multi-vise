import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import Result from './components/Result'

function App() {
  return (
    <div className="App">
      <h1>Multi-vise</h1>
      <SearchBar/>
      <Result/>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", function(){
  redditResponse("Should I break up?");
});

function redditResponse(s){
  var snoowrap = require('snoowrap');
  const r = new snoowrap({
    userAgent: 'Multi-vise',
    clientId: 'g0mFlCzhimudIRrqxZuqVw',
    clientSecret: 'feYFQImHDx42cW-3ce1Bq18GtysnwQ',
    refreshToken: '1972848092863-Le8seeRHjHt_40HFLrIC10yNaAWvPg'
  });

  const subreddit = r.getSubreddit('relationship_advice');
  const relatedPosts = subreddit.search({query: s, sort: "relevance"})

  let data = [];

  relatedPosts.forEach((post) => {
    data.push({
      link: post.url,
      text: post.title,
      score: post.score
    })
  });
  
  console.log(data);
  console.log(s);
}

export default App;
