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

//yPosition from bird state
export const collision = (yPosition, height, pipes) => {
  return {
    type: "CHECKCOLLISION",
    payload: {
      yPosition,
      height,
      pipes
    }
  };
};

export const move = (pipes) => {
  return {
    type: "MOVEPIPES",
    payload: {
      pipes
    }
  };
};

export const newPipe = (pipes, height) => {
  return {
    type: "NEWPIPE",
    payload: {
      pipes, 
      height
    }
  };
};

export const removePipe = (pipes) => {
  return {
    type: "REMOVEPIPE",
    payload: {
      pipes
    }
  };
};