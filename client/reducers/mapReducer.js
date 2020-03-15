const initialState = {
  speed: 0,
  pipes: [{
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  }]
};

function mapReducer(state = initialState, action) {
  switch(action.type) {
    case "COLLISION": {
      return state = {...state, ...action.payload};
    }
    case "NEWPIPE": {
      return state = {...state, ...action.payload};
    }
    default:
      return state;
  }
}

export default mapReducer;