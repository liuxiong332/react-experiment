
import {Carousel, CarouselItem} from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import NavbarHeader from './navbarHeader'

require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');

ReactDOM.render(
  <div>
    <NavbarHeader />
    <Carousel>
      <CarouselItem>
        <div className="carousel-caption">
          <h3>First Slide label</h3>
          <p>HELLO, World</p>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="carousel-caption">
          <h3>Second Slide Label</h3>
          <p>CONSTRUCTOR ... </p>
        </div>
      </CarouselItem>
    </Carousel>
  </div>,
  document.getElementById('webApp'));
