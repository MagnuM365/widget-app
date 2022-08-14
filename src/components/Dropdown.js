import React from "react";

const Dropdown = ({options, selected, onSelectedChange, label}) => {

    const [open, setOpen] = React.useState(false)

    const ref = React.useRef()
    React.useEffect(() => {
        const onbodyClick = (event) => {
            if(ref.current.contains(event.target)){
            return;
            }
            setOpen(false)
          }
      document.body.addEventListener('click', onbodyClick)

      return () => {
        document.body.removeEventListener('click', onbodyClick)
      }
    }, [])
    const renderoptions = options.map((option) => {
        if(option.value === selected.value){
            return null
        }
        return (
            <div 
            key={option.value} 
            className="item"
            onClick={() => onSelectedChange(option)}>
            {option.label}
            </div>
        )
    })
    return (
        <div>
        <div ref = {ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} 
                className={`ui selection dropdown ${open? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open? 'visible transition' : ''}`}>
                        {renderoptions}
                    </div>
                </div>
            </div>   
        </div>

        <h1 style={selected}>This text is {selected.label} color</h1>
        </div>

    )
}

export default Dropdown