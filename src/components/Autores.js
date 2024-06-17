import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Autores() {
  
  return (
    <div class="container mt-3">
      <h2>Autores Famosos</h2>
      <p>Los 4 autores mas famosos de Internet</p>
      <div class="d-flex p-3 bg-secondary text-white">  
        <div class="p-2 bg-info">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://imagessl.casadellibro.com/img/autores/jkrowling.jpg" />
            <Card.Body>
              <Card.Title>J. K. Rowling</Card.Title>
              <Card.Text>
              Joanne Rowling1​ (Yate, 31 de julio de 1965), quien escribe bajo los seudónimos de J. K. Rowling2​ y Robert Galbraith, es una escritora, productora de cine y guionista británica, conocida por ser la autora de la serie de libros Harry Potter
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Harry Potter</ListGroup.Item>
              <ListGroup.Item>Cuentos de Beedle</ListGroup.Item>
              <ListGroup.Item>Animales Fantasticos</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div class="p-2 bg-warning">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrdlp6_6BBRavP9PbMR_AdKPpAeQZN-LU4w&s" />
            <Card.Body>
              <Card.Title>J. R. R. Tolkien</Card.Title>
              <Card.Text>
              fue un escritor, poeta, filólogo, lingüista y profesor universitario conocido internacionalmente por la saga de novelas de fantasía El Hobbit y El Señor de los Anillo
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Silmarillium</ListGroup.Item>
              <ListGroup.Item>El Hobbit</ListGroup.Item>
              <ListGroup.Item>El Señor de los anillos</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div class="p-2 bg-primary">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/624fff0e895e6783a69bcb6c_6034d7d1f3e0f5e5edb2b394_Lewis_Carroll-editorial-alma.png" />
            <Card.Body>
              <Card.Title>Lewis Carroll</Card.Title>
              <Card.Text>
              Charles Lutwidge Dodgson, más conocido por su seudónimo Lewis Carroll, fue un diácono anglicano, lógico, matemático, fotógrafo y escritor británico. Sus obras más conocidas son Alicia en el país de las maravillas y su continuación
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Alicia en el pais de las maravillas</ListGroup.Item>
              <ListGroup.Item>Alicia a travez del Espejo</ListGroup.Item>
              <ListGroup.Item>Diario de un viaje a Rusia</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div class="p-2 bg-info">
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn.oceano.com.ar/autores/SunTzu.jpg" />
        <Card.Body>
          <Card.Title>Sun Tzu</Card.Title>
          <Card.Text>
            Sun Tzu (en chino simplificado: 孙子, en chino tradicional: 孫子, en pinyin: Sūnzǐ) fue un general, estratega militar y filósofo de la antigua China. El nombre por el que se le conoce es en realidad un título honorífico que significa «Maestro Sun».
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>El arte de la guerra</ListGroup.Item>
        </ListGroup>
        
      </Card>
    </div>
      </div>
    </div>
    
  )
}
