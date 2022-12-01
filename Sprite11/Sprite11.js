/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite11/costumes/costume1.svg", {
        x: 118.42730990239122,
        y: 58.76824869695753
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite11/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spike10" },
        this.whenIReceiveSpike10
      ),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide)
    ];
  }

  *whenIReceiveSpike10() {
    this.visible = true;
  }

  *whenIReceiveHide() {
    this.visible = false;
  }
}
