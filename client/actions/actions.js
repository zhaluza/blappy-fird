// we will call this action 
export const moving = (yPosition, gravity, flapping, maxPosition) => {
  yPosition += gravity;
  if (yPosition >= maxPosition) {
    flapping = false;
  }
  if (flapping) {
    gravity += 10; //will need adjust for gampelay
  } 
  else {
    gravity -= 5;
  }
  return {
    type: "FLAPPING",
    yPosition: yPosition,
    gravity: gravity,
    flapping: flapping
  };
}