/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './styles.css'

export default function Button(props){
    const [select, setSelect] = React.useState(false);

    function colored(){
        setSelect((select) => !select)
    }

    React.useEffect(() =>{
        setSelect(false)
    }, [props.style])

    return (
        <button key={props.key} className={`button ${props.style}-${select}`} onClick={colored}><a>{props.value}</a></button>
    )
}

