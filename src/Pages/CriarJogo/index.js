import React from "react";
import Button from "../../Components/Button";
import "./styles.css";

export default function CriarJogo(props) {
  const [group, setGroup] = React.useState([]);
  const [limit, setLimit] = React.useState();


  React.useEffect(() => {
    setGroup([])
    // eslint-disable-next-line default-case
    switch (props.header) {
      case "mega-sena":
        setLimit(60);
        break;
      case "quina":
        setLimit(80);
        break;
      case "lotomania":
        setLimit(100);
        break;
      case "lotofacil":
        setLimit(25);
        break;
      case "dupla-sena":
        setLimit(50);
        break;
    }
    const numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(i);
    }
    setGroup(numbers);
  }, [limit, group, props.header]);

  return (
    <section>
      <h1 className={`title ${props.header}`}>{props.header}</h1>
      <h3>Clique na bolinhas para selecionar os números desejados:</h3>
      <div className="row list-num">
        {group.map((button) => (
          <Button value={button} style={props.header}/>
        ))}
      </div>
    </section>
  );
}
