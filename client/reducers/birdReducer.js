const initialState = {
  yPosition: 0,
  gravity: 0,
  flapping: false,
  maxPosition: undefined
};

function birdReducer (state = initialState, action) {
  switch(action.type) {
    case "FLAPPING": {
      return {...state, ...action.payload};
    }
    case "FLAP": {
      return {...state, ...action.payload};
    }
    default:
      return state;
    
  }
}

export default birdReducer;