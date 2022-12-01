/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Level 1", "./Stage/costumes/Level 1.svg", {
        x: 281.452255,
        y: 234.0245235741204
      }),
      new Costume("Level 2", "./Stage/costumes/Level 2.svg", {
        x: 246.5,
        y: 193.64072398190044
      }),
      new Costume("Level 3", "./Stage/costumes/Level 3.svg", {
        x: 242.79049773755654,
        y: 199.57828054298642
      }),
      new Costume("Level 4", "./Stage/costumes/Level 4.svg", {
        x: 254.40859,
        y: 189.68233000000006
      }),
      new Costume("Level 5", "./Stage/costumes/Level 5.svg", {
        x: 260.237875,
        y: 199.57828
      }),
      new Costume("Level 6", "./Stage/costumes/Level 6.svg", {
        x: 307.5,
        y: 214
      }),
      new Costume("Game Over", "./Stage/costumes/Game Over.png", {
        x: 273,
        y: 140
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.gravity = -0.5;
    this.vars.direction = 0;
    this.vars.jumps = 0;
    this.vars.yforce = 0;
    this.vars.lives = 2;

    this.watchers.lives = new Watcher({
      label: "Lives",
      style: "normal",
      visible: true,
      value: () => this.vars.lives,
      x: 245,
      y: 175
    });
  }
}
