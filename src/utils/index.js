// const movieArr = [];
const gameArr = [];

// class Movie {
//   constructor(title, actor) {
//     this.title = title;
//     this.actor = actor;
//   }
//   add() {
//     movieArr.push(this);
//   }
// }

class Game {
  constructor(title, platform, genre) {
    this.title = title;
    this.platform = platform;
    this.genre = genre;
  }
  add() {
    gameArr.push(this);
  }
}

module.exports = {
  //   Movie,
  //   movieArr,
  Game,
  gameArr,
};
