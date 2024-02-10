  const textures = makeAnimatedSpriteTextures();

  render(
    <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
      <Container position={[150, 150]}>
        <AnimatedSprite
          anchor={0.5}
          textures={textures}
          isPlaying={true}
          initialFrame={0}
          animationSpeed={0.1}
        />
      </Container>
    </Stage>,
  );