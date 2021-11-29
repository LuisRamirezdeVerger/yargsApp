const movieArr = [];
const gameArr = [];

class Movie {
  constructor(title, actor) {
    this.title = title;
    this.actor = actor;
  }
  add() {
    movieArr.push(this);
  }
}

class Game {
  constructor(title, platform, genre) {
    this.title = title;
    this.platform = platform;
    this.genre = genre;
  }
  add() {}
}

module.exports = {
  Movie,
  movieArr,
};
