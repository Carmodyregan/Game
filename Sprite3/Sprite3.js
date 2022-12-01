/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 118.42730990239122,
        y: 58.76824869695753
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spike2" },
        this.whenIReceiveSpike2
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
        { name: "Level 2" },
        this.whenIReceiveLevel2
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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 5" },
        this.whenIReceiveLevel5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 5" },
        this.whenIReceiveLevel6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 6" },
        this.whenIReceiveLevel7
      )
    ];
  }

  *whenIReceiveSpike2() {
    this.visible = true;
  }

  *whenIReceiveHide() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.goto(-41, -70);
    this.direction = 1;
  }

  *whenIReceiveLostLife() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(-41, -70);
    this.direction = 1;
    this.visible = true;
  }

  *whenIReceiveLevel2() {
    yield* this.wait(0.5);
    while (true) {
      this.goto(-14, -190);
      this.visible = true;
      this.direction = 90;
      yield* this.glide(1, -14, 50);
      yield;
    }
  }

  *whenIReceiveLevel3() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.direction = 1;
    this.goto(-14, -76);
    this.visible = true;
  }

  *whenIReceiveLevel4() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(-82, 27);
    this.visible = true;
    while (true) {
      this.direction = 90;
      yield* this.glide(1, -30, 27);
      yield* this.glide(1, -134, 27);
      yield;
    }
  }

  *whenIReceiveLevel5() {
    this.visible = false;
  }

  *whenIReceiveLevel6() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(-119, 28);
    this.direction = 180;
    this.visible = true;
  }

  *whenIReceiveLevel7() {
    while (true) {
      this.goto(-75, 57);
      this.visible = true;
      this.direction = -90;
      yield* this.glide(1, -75, -102);
      yield;
    }
  }
}
