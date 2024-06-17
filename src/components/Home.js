import React from "react";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div class='p-5'>
      <div >
        <div class="row">
          <div class="col-sm-5 p-3">
            <br/><h1 >Bienvenido a la Biblioteca virtual</h1><br/>
            <h4>¡Tu Biblioteca Digital de Libros Electrónicos! Explora una Amplia Colección, Descubre Nuevas Lecturas y Disfruta de la Literatura en Formato Digital.</h4>
            <br/><h3>La mejor pagina de lectura de libros electronicos</h3><br/>
            <h3>Unete a los mas de 10mil lectores</h3>
          </div>
          <div class="col-sm-7 p-3 ">
            <Carousel2/>
          </div>
        </div>
      </div>

      <div class="container p-5 my-5 bg-danger border text-white">
        <h1>Libros Pupulares</h1>
        <h5>
        Descubre los títulos más leídos y recomendados por nuestra comunidad de lectores. Aquí encontrarás una selección de libros que han capturado la imaginación y el interés de muchos. ¡Sumérgete en estas historias imperdibles!
        </h5>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col-sm-3">
            <h3>Habitos Atomicos</h3>
            <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81rK6XgdrKL._AC_UF1000,1000_QL80_.jpg" />
          <Card.Body>
            <Card.Text>
            Hábitos Atómicos es un libro de autoayuda escrito por James Clear que se enfoca en cómo mejorar nuestras vidas mediante la formación de hábitos positivos y el abandono de hábitos negativos.
            </Card.Text>
          </Card.Body>
      </Card>
          </div>
          <div class="col-sm-3">
            <h3>El arte de la guerra</h3>
            <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://www.etp.com.py/img/tapa-mediana-3374872.jpg" />
          <Card.Body>
            <Card.Text>
            El Arte de la Guerra es un antiguo tratado militar escrito por el estratega chino Sun Tzu. Este libro, que data del siglo V a.C., es una de las obras más influyentes sobre estrategia y tácticas militares, pero sus enseñanzas también se aplican a la estrategia empresarial y la vida cotidiana.
            </Card.Text>
            </Card.Body>
      </Card>
          </div>
          <div class="col-sm-3">
            <h3>La divina comedia</h3>
            <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://api.papelerialaparroquia.com/images/LIBRO-LA-DIVINA-COMEDIA-DANTE-ALIGHERI-0-2021_07_20_12_41_09.jpg" />
          <Card.Body>
            <Card.Text>
            La Divina Comedia es una obra maestra de la literatura escrita por el poeta italiano Dante Alighieri en el siglo XIV. Este poema épico, dividido en tres partes —Infierno, Purgatorio y Paraíso—, narra el viaje del propio Dante a través de estos tres reinos de ultratumba.
            </Card.Text>
            </Card.Body>
      </Card>
          </div>
          <div class="col-sm-3">
            <h3>Mi lucha</h3>
            <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNL0OG2fljJRTNbgPMcrjvrFToznvNQfj1A&s" />
          <Card.Body>
            <Card.Text>
            Mi Lucha (en alemán, Mein Kampf) es un libro escrito por Adolf Hitler, publicado en dos volúmenes en 1925 y 1926. La obra combina elementos autobiográficos con una exposición detallada de la ideología política de Hitler, que eventualmente serviría de base para las políticas del Tercer Reich
            </Card.Text>
            </Card.Body>
      </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
