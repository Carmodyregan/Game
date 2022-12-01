/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Barrier1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Barrier1/costumes/costume1.svg", {
        x: -67.5,
        y: 58.5
      })
    ];

    this.sounds = [new Sound("pop", "./Barrier1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "HideBarrier" },
        this.whenIReceiveHidebarrier
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "levelbarrier" },
        this.whenIReceiveLevelbarrier
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lost life" },
        this.whenIReceiveLostLife
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 2" },
        this.whenIReceiveLevel2
      )
    ];
  }

  *whenIReceiveHidebarrier() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(150, 46);
  }

  *whenIReceiveLevelbarrier() {
    this.visible = true;
  }

  *whenIReceiveLostLife() {
    this.visible = true;
    this.goto(150, 46);
  }

  *whenIReceiveLevel2() {
    this.visible = false;
  }
}
