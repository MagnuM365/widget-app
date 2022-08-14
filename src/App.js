import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: 'what is React',
        content: 'React is a front end javascript library'
    },
    {
        title: 'why use React',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do u use React',
        content: 'You use react by creating components'
    }
]

const options = [
    {
        color: "red",
        label: "Red",
        value: "red"
    },
    {
        color: "blue",
        label: "Blue",
        value: "blue"
    },
    {
        color: "green",
        label: "Green",
        value: "green"
    }

]

const App = () => {

    const[selected, setSelected] = React.useState(options[0])
    const [showDropdown, setShowDropdown] = React.useState(true)
   
    return(
        <div>
        <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
         <button onClick={() => setShowDropdown(!showDropdown)}>toggle Dropdown</button>
         {showDropdown ? 
            <Dropdown
            label="Select a Color" 
            selected={selected} 
            onSelectedChange={setSelected}
            options={options} /> : null
         }
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
    
    
}

export default App;

