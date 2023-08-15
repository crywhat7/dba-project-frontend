import confetti from 'canvas-confetti';

export const showConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 150,
    origin: { y: 0.6 },
  });
};
