import React from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Africaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindu',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'ln'
    },
    {
        label: 'Bengali',
        value: 'bn'
    },
    {
        label: 'Bulgarian',
        value: 'bg'
    },
    {
        label: 'Catalan',
        value: 'ca'
    },
    
]

const Translate = () => {
    const [language, setLanguage] = React.useState(options[0])
    const [text, setText] = React.useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown label="Select a Language" 
            selected={language} 
            onSelectedChange={setLanguage} 
            options={options} />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text}/>
        </div>
    )
}

export default Translate

