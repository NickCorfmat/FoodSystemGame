title = "FOODCONOMY";

description = `
     Meet
ever-increasing
  food demand
`;

characters = [
  `
   `,
];

options = {
  viewSize: { x: 150, y: 75 },
  isShowingScore: true,
  theme: "simple",
};

function update() {
  // pre-game menu scene
  if (!ticks) {
  }

  drawScene();
}

function drawScene() {
  // create game window size references
  const { x: gameWidth, y: gameHeight } = options.viewSize;
  const proportion = options.viewSize.x / 7;

  // draw sky
  color("light_cyan");
  rect(0, 0, gameWidth, gameHeight);

  // draw ground
  color("green");
  rect(0, gameHeight - 10, gameWidth, 10);

  // draw farm
  color("black");
  text("farm", proportion - 9, 20);

  color("yellow");
  rect(gameWidth * 0.1, gameHeight - 16, 2, 6);
  rect(gameWidth * 0.12, gameHeight - 17, 2, 7);
  rect(gameWidth * 0.146, gameHeight - 16, 2, 6);
  rect(gameWidth * 0.17, gameHeight - 17, 2, 7);
  rect(gameWidth * 0.19, gameHeight - 16, 2, 6);

  // draw grocery store
  color("black");
  text("store", 63, 38);

  color("light_blue");
  rect(3 * proportion, gameHeight - 30, proportion, 20);
  color("black");
  rect(3.75 * proportion, gameHeight - 18, 5, 8);

  // draw houses
  color("black");
  text("buyers", 5 * proportion + 8, gameHeight - 26);

  color("red");
  rect(gameWidth * 0.8, gameHeight - 20, 10, 10);
  rect(gameWidth * 0.9, gameHeight - 20, 10, 10);
  color("black");
  rect(gameWidth * 0.825, gameHeight - 15, 4, 5);
  rect(gameWidth * 0.925, gameHeight - 15, 4, 5);
}
