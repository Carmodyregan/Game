/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 118.42730990239122,
        y: 58.76824869695753
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spike5" },
        this.whenIReceiveSpike5
      ),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 3" },
        this.whenIReceiveLevel3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lost life" },
        this.whenIReceiveLostLife
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

  *whenIReceiveSpike5() {
    this.visible = true;
  }

  *whenIReceiveHide() {
    this.visible = false;
  }

  *whenIReceiveLevel3() {
    this.visible = true;
    this.direction = 90;
    this.goto(-79, -50);
    while (true) {
      yield* this.glide(0.8, -109, -50);
      yield* this.wait(0.5);
      yield* this.glide(0.8, -42, -50);
      yield;
    }
  }

  *whenIReceiveLostLife() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(124, -49);
    this.direction = 1;
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.direction = 1;
    this.goto(124, -49);
  }

  *whenIReceiveLevel4() {
    this.visible = false;
  }

  *whenIReceiveLevel5() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(94, 30);
    this.direction = 1;
    this.visible = true;
  }

  *whenIReceiveLevel6() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(-134, -72);
    this.direction = 180;
    this.visible = true;
  }

  *whenIReceiveLevel7() {
    this.goto(52, -70);
    this.direction = 90;
    this.visible = true;
    while (true) {
      yield* this.glide(0.8, 120, -70);
      yield* this.glide(0.8, 52, -70);
      yield;
    }
  }
}
