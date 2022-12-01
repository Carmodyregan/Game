/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 118.42730990239122,
        y: 58.76824869695753
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite8/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spike7" },
        this.whenIReceiveSpike7
      ),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 4" },
        this.whenIReceiveLevel4
      )
    ];
  }

  *whenIReceiveSpike7() {
    this.visible = true;
  }

  *whenIReceiveHide() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.direction = 1;
    this.goto(124, -92);
  }

  *whenIReceiveLostLife() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(124, -92);
    this.direction = 1;
    this.visible = true;
  }

  *whenIReceiveLevel3() {
    this.visible = true;
    this.direction = 90;
    this.goto(108, -50);
    while (true) {
      yield* this.wait(1);
      this.visible = false;
      yield* this.wait(0.5);
      this.visible = true;
      yield;
    }
  }

  *whenIReceiveLevel4() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
