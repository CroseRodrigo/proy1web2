import React from 'react'

export default function Carousel1() {
  return (
    <div class="container">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.ctfassets.net/usf1vwtuqyxm/ZYMcLjGl6Gh3FicESY9q3/dcc6bce1f3d9c52fd2fce3bc1098682a/Harry-Potter-2023-Paperbacks-Assets_Purple.jpg?fm=jpg&q=70&w=2560" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>2x1 Martes y jueves</h5>
        <p>Aprovecha esta oferta los dos dias de la semana</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://web.didiglobal.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fn7hs0hadu6ro%2F1O0Be1dObiQBm17GQJHLj8%2F3fde720730f0b3616ecf5a82b928e7f9%2Fpizza-a-domicilio-cerca-de-mi.jpg&w=3840&q=75" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://web.didiglobal.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fn7hs0hadu6ro%2F1O0Be1dObiQBm17GQJHLj8%2F3fde720730f0b3616ecf5a82b928e7f9%2Fpizza-a-domicilio-cerca-de-mi.jpg&w=3840&q=75" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
