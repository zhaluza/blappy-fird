// we will call this action 
export const moving = (yPosition, gravity, flapping, maxPosition) => {
  // yPosition += gravity;
  // if (maxPosition) {
  //   if (yPosition >= maxPosition) {
  //     flapping = false;
  //     maxPosition = undefined;
  //   }
  // }
  // if (flapping) {
  //   gravity += 10; //will need adjust for gampelay
  // } 
  // else {
  //   gravity -= 5;
  // }
  return {
    type: "FLAPPING",
    payload: {
      yPosition: yPosition,
      gravity: gravity,
      flapping: flapping,
      maxPosition: maxPosition
    }
  };
};

export const jump = (yPosition, maxPosition, flapping, jumpHeight) => {
  // flapping = true;
  // maxPosition = yPosition + jumpHeight;
  return {
    type: "FLAP",
    payload: {
      maxPosition: maxPosition,
      flapping: flapping,
      yPosition: yPosition,
      jumpHeight: jumpHeight
    }
  };
};