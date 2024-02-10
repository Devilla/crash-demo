import { Stage, Container, AnimatedSprite } from '@pixi/react';
import * as PIXI from 'pixi.js';
import { Rocket } from '../Rocket/Rocket';  

export const Multiplier = () =>
{
  
  let alienImages = ["rocket.png", "bunny.png"];
  let textureArray = [];
  
  alienImages.map((image, i) => { 
       let texture = PIXI.Texture.from(image);
       textureArray.push(texture);
  });
  
  return (
    <Stage width={600} height={300}>
      <Container x={150} y={150}>
        <AnimatedSprite
        width={60} height={30}
          anchor={0.5}
          textures={textureArray}
          isPlaying={true}
          initialFrame={0}
          animationSpeed={1}
        />
      </Container>
    </Stage>
  );
};