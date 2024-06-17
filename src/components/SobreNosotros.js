import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../SobreNos.css';
import ReactPlayer from 'react-player';

export default function SobreNosotros() {
  const videoprueba = 'https://www.youtube.com/watch?v=iNjxfGJxpns&pp=ygUMbGlicm9zIGhkIDRr';
  
  return (
    <div>
      <div className="SobreNos p-5">
        <section className="introduction">
          <h2>Bienvenido a BookerMania</h2>
          <p>Tu destino en línea para los mejores libros digitales. Nos apasiona la lectura y estamos comprometidos en ofrecerte una experiencia de lectura inigualable.</p>
        </section>

        <section className="history">
          <h3>Nuestra Historia</h3>
          <p>Nuestra historia comenzó con una simple idea: hacer que la lectura sea accesible para todos. Fundamos BookerMania en 2024 con la misión de conectar a los lectores con una vasta colección de libros digitales de alta calidad.</p>
        </section>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <ReactPlayer
            url={videoprueba}
            playing={true}
            volume={0.8}
            controls={false}
            width='50%'
            height='300px'
          />
        </div>

        <section className="values-mission">
          <h3>Valores y Misión</h3>
          <p>En BookerMania, creemos en el poder de la lectura para enriquecer vidas, expandir mentes y fomentar la imaginación. Nuestra misión es proporcionar una plataforma donde los lectores puedan descubrir y disfrutar de libros digitales en un entorno amigable y accesible.</p>
        </section>

        <section className="offer">
          <h3>Nuestra Oferta</h3>
          <p>Ofrecemos una amplia gama de libros digitales que abarca desde ficción y no ficción hasta ciencia, tecnología, autoayuda y más. Lo que nos distingue es nuestro compromiso con la calidad y la satisfacción del cliente. Trabajamos estrechamente con autores y editoriales para asegurarnos de que nuestros lectores siempre tengan acceso a las últimas y mejores publicaciones.</p>
        </section>

        <section className="contact">
          <h3>Contactanos</h3>
          <p>¡Gracias por visitarnos! Si deseas saber más sobre nosotros o tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
        </section>
      </div>

      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formApellidos">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" placeholder="Apellidos" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCorreo">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formComentario">
            <Form.Label>Comentario</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="dark" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
}