const initialState = {
  speed: 0,
  pipes: [{
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  }],
  distanceBetweenPipes: 50,
  gameOver: false
};

function mapReducer(state = initialState, action) {
  switch(action.type) {
    case "CHECKCOLLISION": {
      const { birdY, birdHeight, pipes } = action.payload;
      const birdTopY = birdY + birdHeight;
      let gameOver = false;
      const pipe = pipes[0]; //{x1,x2,y1,y2} left right bottom top
      //only the first pipe can hurt the bird
      if (birdTopY >= pipe.y2) {
        gameOver = true;
      }
      else if (birdY >= pipe.y2) {
        gameOver = true;
      }
      else if (birdTopY <= pipe.y1) {
        gameOver = true;
      }
      else if (birdHeight <= pipe.y1) {
        gameOver = true;
      }

      const newState = {
        gameOver
      };
      
      return state = {...state, ...newState};
    }
    case "NEWPIPE": {



      return state = {...state, ...action.payload};
    }
    default:
      return state;
  }
}

export default mapReducer;