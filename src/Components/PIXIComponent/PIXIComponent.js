import { Stage, Container, AnimatedSprite } from '@pixi/react';
import * as PIXI from 'pixi.js';
import { Rocket } from '../Rocket/Rocket';  
import './PIXIComponent.css';

export const PIXIComponent = () =>
{

  let numberImages = ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png", "assets/5.png", "assets/6.png", "assets/7.png", "assets/8.png", "assets/9.png", "assets/10.png"];
  let textureArray = [];
  
  numberImages.map((image, i) => { 
       let texture = PIXI.Texture.from(image);
       textureArray.push(texture);
  });

  return (
    <Stage width={350} height={300}>
      <Container x={150} y={150}>
        <Rocket />
      </Container>

    </Stage>
  );
};