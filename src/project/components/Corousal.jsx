import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageCard from './ImageCard'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Corousal() {
  return (
    <Carousel showThumbs={false} width="50%" >
      <div>
        <center>
          <ImageCard />
        </center>
      </div>
      <div>
        <center>
          <ImageCard />
        </center>
      </div>
      <div>
        <center>
          <ImageCard />
        </center>
      </div>
      <div>
        <center>
          <ImageCard />
        </center>
      </div>
    </Carousel >
  )
}