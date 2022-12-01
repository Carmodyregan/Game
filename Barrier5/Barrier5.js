/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Barrier5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Barrier5/costumes/costume1.svg", {
        x: -67.5,
        y: 58.5
      })
    ];

    this.sounds = [new Sound("pop", "./Barrier5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "HideBarrier" },
        this.whenIReceiveHidebarrier
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

  *whenIReceiveHidebarrier() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLostLife() {
    this.visible = false;
  }

  *whenIReceiveLevel4() {
    this.goto(188, 168);
  }

  *whenIReceiveLevel5() {
    this.goto(187, 159);
    this.visible = true;
  }

  *whenIReceiveLevel6() {
    this.visible = false;
  }
}
