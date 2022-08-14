import React from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = React.useState('');
    const [result, setResult] = React.useState([]);

    React.useEffect(() => {
        const search = async() => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });
            setResult(data.query.search);
        };

        if(term && result.length){
            search()
        }else{
            const timeoutId = setTimeout(() => {
                if(term){
                    search();
                }
            }, 600)
    
            return( () => {
                clearTimeout(timeoutId);
            })
            }  
    }, [term])

    const renderResult = result.map((result) => {
        return (
            <div key = {result.pageid} className="item"> 
            <div className="right floated content">
            <a className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
            </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
    
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label> Enter Search Term</label>
                    <input type="text" 
                    value={term}
                    onChange={ e => setTerm(e.target.value)}
                    className="input" />
                </div>
            </div>
            <div className="ui celled list">{renderResult}</div>
        </div>
    )
}

export default Search;