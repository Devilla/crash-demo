import { Stage, Container, AnimatedSprite } from '@pixi/react';
import { render } from 'react';
import { Rocket } from '../Rocket/Rocket';  
import './MyComponent.css';

export const MyComponent = () =>
{
  // const textures = makeAnimatedSpriteTextures();

  // render(
  //   <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
  //     <Container position={[150, 150]}>
  //       <AnimatedSprite
  //         anchor={0.5}
  //         textures={textures}
  //         isPlaying={true}
  //         initialFrame={0}
  //         animationSpeed={0.1}
  //       />
  //     </Container>
  //   </Stage>,
  // );

  return (
    <Stage width={300} height={300}>
    <Container x={150} y={150}>
        <Rocket />
    </Container>
  </Stage>
  );


};