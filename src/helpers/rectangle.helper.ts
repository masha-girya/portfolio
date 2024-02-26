export const calculateDiagonal = (length: number, width: number) => {
  return Math.sqrt((length ** 2) + (width ** 2));
};

export const calculateDiagonalAngle = (height: number, width: number) => {
  const angle = Math.atan(height / width) * (180 / Math.PI);

  return angle;
};
