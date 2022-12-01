/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 118.42730990239122,
        y: 58.76824869695753
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spike4" },
        this.whenIReceiveSpike4
      ),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 3" },
        this.whenIReceiveLevel3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lost life" },
        this.whenIReceiveLostLife
      ),
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
        { name: "Level 6" },
        this.whenIReceiveLevel6
      )
    ];
  }

  *whenIReceiveSpike4() {
    this.visible = true;
  }

  *whenIReceiveHide() {
    this.visible = false;
  }

  *whenIReceiveLevel3() {
    this.visible = false;
    this.direction = 1;
    this.goto(148, -76);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.goto(-41, -118);
    this.direction = 1;
    this.visible = true;
  }

  *whenIReceiveLostLife() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(-41, -118);
    this.direction = 1;
    this.visible = true;
  }

  *whenIReceiveLevel4() {
    this.goto(-134, -99);
    this.direction = 180;
    this.visible = true;
  }

  *whenIReceiveLevel5() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(-2, -31);
    this.direction = 90;
    this.visible = true;
    while (true) {
      yield* this.glide(0.7, 36, -31);
      yield* this.glide(0.7, -2, -31);
      yield;
    }
  }

  *whenIReceiveLevel6() {
    this.visible = false;
    yield* this.wait(0.5);
    while (true) {
      this.goto(144, 57);
      this.visible = true;
      this.direction = -90;
      yield* this.glide(1, 144, -102);
      yield;
    }
  }
}
