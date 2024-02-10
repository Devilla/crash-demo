import React, { useReducer, useRef } from 'react';
import { Sprite, useTick } from '@pixi/react';
import './Rocket.css';

const reducer = (_, { data }) => data;

const Rocket = () => {
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);

  useTick((delta) => {
    const i = (iter.current += 0.05 * delta);

    update({
      type: 'update',
      data: {
        x: 1,
        y: 1,
        rotation: 0,
        anchor: Math.sin(i),
      },
    });
  });

  return (
        <Sprite width={30} height={30} image="rocket.png" {...motion} />
  )

};

export  {Rocket};