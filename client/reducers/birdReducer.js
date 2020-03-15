const initialState = {
  yPosition: 0,
  speed: 0
};

function birdReducer (state = initialState, action) {
  switch(action.type) {
    case "FLAP": {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
}

export default birdReducer;