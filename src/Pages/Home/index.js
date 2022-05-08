import './styles.css'
import megasena from '../../assets/logo-megasena.png'
import quina from '../../assets/logo-quina.png'
import duplasena from '../../assets/logo-dupla-sena.png'
import lotofacil from '../../assets/logo-lotofacil.png'
import lotomania from '../../assets/logo-lotomania.png'

import Card from '../../Components/Card';

const Home = () => {

  const data = [{
    image: megasena,
    prize: "R$ 123.254.665,52",
    style: "mega-sena",
    contest: 2478,
    result: ["02","17","23","28","39","46"]
  }, {
    image: quina,
    prize: "R$ 123.254.665,52",
    style: "quina",
    contest: 5846,
    result: ["05", "57", "59", "66", "73" ]
  }, {
    image: duplasena,
    prize: "R$ 123.254.665,52",
    style: "dupla-sena",
    contest: 2478,
    result: ["03","18","19","42","49","50"]
  }, 
  {
    image: lotofacil,
    prize: "R$ 123.254.665,52",
    style: "lotofacil",
    contest: 2478,
    result: ["02", "03", "05", "06", "07", "08", "09", "12", "14", "15", "16", "18", "19", "21", "24"]
  }, 
  {
    image: lotomania,
    prize: "R$ 123.254.665,52",
    style: "lotomania",
    contest: 2478,
    result: ["03","07","18","24","33","34","36","46","50","54","70","71","76","82","83","87","93","95","97","98"]
  }, 
]

  return (
    <section className='home'>
      <h1 className='titulo'>Resultados dos jogos</h1>

        <div className='option'>
          {data.map((i) => (
            <Card key={i.contest} image={i.image} prize={i.prize} style={i.style} result={i.result} contest={i.contest}/>
          ))}
        </div>
    </section>
  );
};

export default Home;