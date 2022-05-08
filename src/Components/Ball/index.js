import './styles.css'

export default function Ball(props){
    return (
        <div key={props.key} className={`ball ${props.style}-secondary`}><span>{props.value}</span></div>
    )
}

