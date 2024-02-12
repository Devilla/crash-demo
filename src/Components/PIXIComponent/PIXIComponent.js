import { Stage, Container, AnimatedSprite } from '@pixi/react';
import { Rocket } from '../Rocket/Rocket';  
import './PIXIComponent.css';

export const PIXIComponent = () =>
{
  return (
    <Stage width={350} height={300}>
      <Container x={150} y={150}>
        <Rocket />
      </Container>
    </Stage>
  );
};