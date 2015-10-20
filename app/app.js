
import {Carousel, CarouselItem} from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import NavbarHeader from './navbarHeader'

ReactDOM.render(
  <div>
    <NavbarHeader />
    <Carousel>
      <CarouselItem>
        <image src="http://www.ifred.org/wp-content/uploads/2014/11/woman.jpg" />
        <div className="carousel-caption">
          <h3>First Slide label</h3>
          <p>HELLO, World</p>
        </div>
      </CarouselItem>
      <CarouselItem>
        <image src="http://www.nitod.org/2.jpg" />
        <div className="carousel-caption">
          <h3>Second Slide Label</h3>
          <p>CONSTRUCTOR ... </p>
        </div>
      </CarouselItem>
    </Carousel>
  </div>,
  document.getElementById('webApp'));
