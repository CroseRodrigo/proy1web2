import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap

// Define the ExampleCarouselImage component
const ExampleCarouselImage = ({ text }) => (
    <div style={{ height: '400px', backgroundColor: '#777', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h3>{text}</h3>
    </div>
);

export default function Carousel2() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img src="https://images.ctfassets.net/usf1vwtuqyxm/ZYMcLjGl6Gh3FicESY9q3/dcc6bce1f3d9c52fd2fce3bc1098682a/Harry-Potter-2023-Paperbacks-Assets_Purple.jpg?fm=jpg&q=70&w=2560" className="d-block w-100" alt="..."/>
                    <Carousel.Caption>
                        <h3 class="text-bg-dark border" >La Saga de Harry Potter</h3>
                        <p class="text-bg-danger border">Embarcate en un mundo de magia y animales magicos junto a Harry Potter y sus Amigos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://biblio.es/blog/wp-content/uploads/2023/01/estuche-tolkien-1024x683.jpeg?x29573" className="d-block w-100" alt="..."/>
                    <Carousel.Caption>
                        <h3 class="text-bg-dark border">El Señor de los anillos</h3>
                        <p class="text-bg-danger border">emprende un peligroso viaje para destruir el Anillo Único arrojándolo en los fuegos del Monte del Destino.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://i.ebayimg.com/images/g/NjUAAOSwxh5iaREP/s-l1200.webp" className="d-block w-100" alt="..."/>
                    <Carousel.Caption>
                        <h3 class="text-bg-dark border">El codigo Da Vinci</h3>
                        <p class="text-bg-danger border">Con la ayuda de la criptóloga francesa Sophie Neveu, Langdon descubre que Saunière era el líder de una sociedad secreta llamada el Priorato de Sion.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}