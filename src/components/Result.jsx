import './Result.css'

const Result = ({result, id}) => {
    return (
      <div className="result-card m-2 p-2">
            <div className = "result-body">
                <p>{result.text}</p>
                <p style={{fontStyle: 'italic'}}>Popularity: {result.score} | Sentiment: {result.sent_score}</p>
            </div>
      </div>  
    );
}

const ResultList = ({results}) => {
    return (
        <div className = "results">
            { results.map((result) =>
            <Result
                result={result}
                />
            )}
        </div>
    )
}

export default ResultList;