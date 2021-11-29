const yargs = require("yargs");

const { Game, gameArr } = require("./utils");

const app = (args) => {
  switch (process.argv[2]) {
    // case "add":
    //   const movie = new Movie(args.title, args.actor);
    //   movie.add();
    //   console.log(movieArr);
    //   break;

    case "add":
      const game = new Game(args.title, args.platform, args.genre);
      game.add();
      console.log(gameArr);
      break;

    // case "add multi":
    //   const movie1 = new Movie(args.title1, args.actor1);
    //   const movie2 = new Movie(args.title2, args.actor2);
    //   movie1.add();
    //   movie2.add();
    //   console.log(movieArr);
    //   break;

    default:
      console.log("Incorrect grammar");
      break;
  }
};

app(yargs.argv);
