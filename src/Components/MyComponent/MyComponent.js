import { Stage, Container, Text } from '@pixi/react';
import { Rocket } from '../Rocket/Rocket';  
import './MyComponent.css';

export const MyComponent = () =>
{

  return (
    <Stage width={600} height={300}>
      <Container x={250} y={150}>
        <Rocket />
      </Container>
      <Container x={150} y={150}>
      <Text style={{color:"white"}} text="Hello World" anchor={{ x: 0.5, y: 0.5 }} />
      </Container>
    </Stage>
  );


};