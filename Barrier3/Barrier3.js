/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Barrier3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Barrier3/costumes/costume1.svg", {
        x: -67.5,
        y: 58.5
      })
    ];

    this.sounds = [new Sound("pop", "./Barrier3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "HideBarrier" },
        this.whenIReceiveHidebarrier
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level 4" },
        this.whenIReceiveLevel4
      )
    ];
  }

  *whenIReceiveHidebarrier() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLevel3() {
    this.goto(152, 27);
    this.visible = true;
  }

  *whenIReceiveLostLife() {
    this.visible = false;
  }

  *whenIReceiveLevel4() {
    this.visible = false;
  }
}
