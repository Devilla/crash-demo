import { Stage, Container, AnimatedSprite } from '@pixi/react';
import * as PIXI from 'pixi.js';
import { Rocket } from '../Rocket/Rocket';  
import './MyComponent.css';

export const MyComponent = () =>
{

  let numberImages = ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png", "assets/5.png", "assets/6.png", "assets/7.png", "assets/8.png", "assets/9.png", "assets/10.png"];
  let textureArray = [];
  
  numberImages.map((image, i) => { 
       let texture = PIXI.Texture.from(image);
       textureArray.push(texture);
  });

  return (
    <Stage width={350} height={300}>
      <Container x={300} y={30}>
        <Rocket />
      </Container>
      <Container 
      width={50} height={50}
      position={[50, 250]}>
      <AnimatedSprite
        anchor={0.5}
        textures={textureArray}
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.1}
      />
    </Container>
    </Stage>
  );
};