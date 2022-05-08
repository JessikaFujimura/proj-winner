import React from "react"
import './styles.css'
import Ball from "../Ball"

export default function Card(props) {

    return (
        <div key={props.contest} className={`card ${props.style}`}>
            <img src={props.image} alt='logo' className='logo-jogo'/>
            <span>{props.prize}</span>
            <span>Concurso: {props.contest}</span>
            <div className="board-ball">
                {props.result.map((b) =><Ball key={props.contest} value={b} style={props.style}/>)}
            </div>
        </div>
    )
}