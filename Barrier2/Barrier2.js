/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Barrier2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Barrier2/costumes/costume1.svg", {
        x: -67.5,
        y: 58.5
      })
    ];

    this.sounds = [new Sound("pop", "./Barrier2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "HideBarrier" },
        this.whenIReceiveHidebarrier
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 2" },
        this.whenIReceiveLevel2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 3" },
        this.whenIReceiveLevel3
      )
    ];
  }

  *whenIReceiveHidebarrier() {
    this.visible = false;
  }

  *whenIReceiveLevel2() {
    this.goto(154, 64);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLevel3() {
    this.visible = false;
  }
}
