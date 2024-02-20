import React from 'react';
import { render, screen } from '@testing-library/react';
import ExponentialGraphCanvas from './ExponentialGraphCanvas';

describe('ExponentialGraphCanvas', () => {
  test('renders canvas element', () => {
    render(<ExponentialGraphCanvas />);
    const canvasElement = screen.getByRole('canvas');
    expect(canvasElement).toBeInTheDocument();
  });

  test('renders the graph correctly', () => {
    render(<ExponentialGraphCanvas />);
    const canvasElement = screen.getByRole('canvas');
    const ctx = canvasElement.getContext('2d');

    // Mock the requestAnimationFrame function
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => {
      callback();
      return 1; // Return a dummy animation frame ID
    });

    // Assert that the graph is drawn correctly
    expect(ctx.beginPath).toHaveBeenCalledTimes(1);
    expect(ctx.strokeStyle).toBe('green');
    expect(ctx.lineWidth).toBe(2);
    expect(ctx.lineTo).toHaveBeenCalledTimes(canvasElement.width);
    expect(ctx.stroke).toHaveBeenCalledTimes(1);

    // Assert that the rocket image is placed correctly
    expect(ctx.drawImage).toHaveBeenCalledTimes(1);
    expect(ctx.drawImage).toHaveBeenCalledWith(expect.any(Image), canvasElement.width - 50, expect.any(Number), 50, 50);
  });
});