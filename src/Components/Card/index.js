import React from "react"
import './styles.css'

export default function Card(props) {


    return (
        <div key={props.contest} className={`card ${props.style}`} onClick={() => console.log()}>
            <img src={props.image} alt='logo' className='logo-jogo'/>
            <span>{props.prize}</span>
            <span>Concurso: {props.contest}</span>
            <div className="board-ball">
                {props.result.map((b) =><div key={b} className={`ball ${props.style}-secondary`}><span>{b}</span></div>)}
            </div>
        </div>
    )
}