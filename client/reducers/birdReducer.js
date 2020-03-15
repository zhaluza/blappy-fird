const initialState = {
  yPosition: 0,
  gravity: 0,
  flapping: false,
  maxPosition: undefined
};

function birdReducer (state = initialState, action) {
  switch(action.type) {
    case "FLAPPING": {
      //do stuff based on action.payload
      const {yPosition, gravity, flapping, maxPosition} = action.payload;
      yPosition += gravity;
      if (maxPosition) {
        if (yPosition >= maxPosition) {
          flapping = false;
          maxPosition = undefined;
        }
      }
      if (flapping) {
        gravity += 10; //will need adjust for gampelay
      } 
      else {
        gravity -= 5;
      }
      const newState = {yPosition, gravity, flapping};
      return {...state, ...newState};
    }
    case "FLAP": {
      const {yPosition, maxPosition, flapping, jumpHeight} = action.payload;
      flapping = true;
      maxPosition = yPosition + jumpHeight;
      const newState = {flapping, maxPosition};
      return {...state, ...newState};
    }
    default:
      return state;
    
  }
}

export default birdReducer;