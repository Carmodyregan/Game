/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite7/costumes/costume1.svg", {
        x: 118.42730990239122,
        y: 58.76824869695753
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spike6" },
        this.whenIReceiveSpike6
      ),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lost life" },
        this.whenIReceiveLostLife
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 3" },
        this.whenIReceiveLevel3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 4" },
        this.whenIReceiveLevel4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 5" },
        this.whenIReceiveLevel5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 4" },
        this.whenIReceiveLevel6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 6" },
        this.whenIReceiveLevel7
      )
    ];
  }

  *whenIReceiveSpike6() {
    this.visible = true;
  }

  *whenIReceiveHide() {
    this.visible = false;
  }

  *whenIReceiveLostLife() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(124, -70);
    this.direction = 1;
    this.visible = true;
  }

  *whenIReceiveLevel3() {
    this.visible = true;
    this.direction = 90;
    this.goto(28, -50);
    while (true) {
      yield* this.glide(0.4, 7, -50);
      yield* this.wait(0.5);
      yield* this.glide(0.4, 47, -50);
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.direction = 1;
    this.goto(124, -70);
  }

  *whenIReceiveLevel4() {
    this.visible = false;
  }

  *whenIReceiveLevel5() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(153, 84);
    this.direction = 1;
    this.visible = true;
  }

  *whenIReceiveLevel6() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(-134, -49);
    this.direction = 180;
    this.visible = true;
  }

  *whenIReceiveLevel7() {
    this.goto(30, -70);
    this.direction = 90;
    this.visible = true;
    while (true) {
      yield* this.glide(1, -44, -70);
      yield* this.glide(1, 30, -70);
      yield;
    }
  }
}
