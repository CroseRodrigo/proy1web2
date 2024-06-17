import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function Libros() {
  return (
    <div className='bodyMenu'>
      <div class="container-fluid p-5 text-white">
        <h1 class="text-bg-dark p-3">Los mas populares de la semana</h1>
        <div className="row">
          <div className="col">
            <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
            <Card.Img variant="top" src="https://libreria.tirant.com/high/9788408270881.jpg" />
            <Card.Body>
              <Card.Title>Don quijote de la mancha</Card.Title>
              <Card.Text>
              Don Quijote de la Mancha, escrita por Miguel de Cervantes y publicada en dos partes en 1605 y 1615, es una de las obras más importantes de la literatura española y universal.
              </Card.Text>
            </Card.Body>
            </Card>
          </div>

        <div className="col">
      <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://covers.alibrate.com/b/59872e9ccba2bce50c1cca51/2b944296-585b-4f69-9b6d-720a6a1dc6af/share" />
          <Card.Body>
            <Card.Title>Historia de dos ciudades</Card.Title>
            <Card.Text>
            Historia de dos ciudades es una novela histórica escrita por Charles Dickens, publicada por primera vez en 1859. Ambientada en Londres y París antes y durante la Revolución Francesa, la novela explora temas de sacrificio, redención y la brutalidad de la guerra.
            </Card.Text>
          </Card.Body>
      </Card>
      </div>

      <div className="col">
      <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://solo-libros.com/wp-content/uploads/2022/03/el-principito.jpg" />
          <Card.Body>
            <Card.Title>El principito</Card.Title>
            <Card.Text>
            El Principito es una novela corta y profundamente filosófica escrita por Antoine de Saint-Exupéry, publicada por primera vez en 1943. Aunque se presenta como un cuento para niños, la obra ofrece reflexiones profundas sobre la vida, la naturaleza humana y la esencia de la verdadera amistad y amor.
            </Card.Text>
          </Card.Body>
      </Card>
      </div>
      </div>
      </div>
      
      <div class="container-fluid p-5 text-white">
      <h1 class="text-bg-dark p-3">Los mas Vendidos</h1>
        <div className="row">
          <div className="col">
            <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
            <Card.Img variant="top" src="https://www.marcialpons.es/media/img/portadas/9788445012802.jpg" />
            <Card.Body>
              <Card.Title>El hobbit</Card.Title>
              <Card.Text>
              El Hobbit, escrito por J.R.R. Tolkien y publicado en 1937, es una novela de fantasía que precede a la trilogía de El Señor de los Anillos. La historia sigue a Bilbo Bolsón, un hobbit que vive una vida tranquila y sin aventuras en la Comarca, hasta que es inesperadamente arrastrado a una emocionante travesía.
              </Card.Text>
            </Card.Body>
            </Card>
          </div>

        <div className="col">
      <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71JbJNobjqL._AC_UF1000,1000_QL80_.jpg" />
          <Card.Body>
            <Card.Title>Sueno en el pabellon rojo</Card.Title>
            <Card.Text>
            "Sueño en el Pabellón Rojo" es una novela clásica de la literatura china escrita por Cao Xueqin en el siglo XVIII. La historia sigue la vida de Jia Baoyu, un joven noble perteneciente a una familia adinerada, y su relación con las diversas mujeres en su vida. 
            </Card.Text>
          </Card.Body>
      </Card>
      </div>

      <div className="col">
      <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://images.cdn1.buscalibre.com/fit-in/360x360/42/7f/427f18ddc9cb21b5d943a63517df875a.jpg" />
          <Card.Body>
            <Card.Title>Alcia en el pais de la maravilla</Card.Title>
            <Card.Text>
            "Alicia en el País de las Maravillas" es un clásico de la literatura infantil escrito por Lewis Carroll. La historia sigue a una joven llamada Alicia que cae por casualidad en un agujero de conejo y entra en un mundo fantástico lleno de criaturas y eventos absurdos.
            </Card.Text>
          </Card.Body>
      </Card>
      </div>
      </div>
      </div>
    </div>
  )
}
