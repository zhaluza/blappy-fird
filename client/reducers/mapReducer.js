const initialState = {
  speed: 50,
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
    case "MOVEPIPES": {
      const { pipes } = action.payload;
      for (let i = 0; i < pipes.length; i++) {
        pipes[i].x1 -= speed;
        pipes[i].x2 -= speed;
      }
      const newState = {
        pipes
      };
      return state = {...state, ...newState};
    }
    case "NEWPIPE": {
      const { pipes, height } = action.payload;
      const newY1  = Math.floor(Math.random()*height);
      const newY2 = newY1 + 50;
      pipes.push({
        x1: 150,
        x2: 200,
        y1: newY1, 
        y2: newY2,
      });
      const newState = {
        pipes
      };
      return state = {...state, ...newState};
    }
    case "REMOVEPIPE": {
      const {pipes} = action.payload;
      pipes.shift();
      const newState = {
        pipes
      };
      return state = {...state, ...newState};
    }
    default:
      return state;
  }
}

export default mapReducer;