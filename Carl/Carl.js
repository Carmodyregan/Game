/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Carl extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Carl", "./Carl/costumes/Carl.svg", {
        x: 41.54076972328252,
        y: 146.42364280534355
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked11),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked12)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.gravity = 0;
    while (true) {
      if (!this.touching(Color.rgb(0, 0, 0))) {
        this.stage.vars.gravity += -1;
      }
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.stage.vars.gravity = 0;
      }
      if (this.touching(Color.rgb(0, 0, 0)) && this.keyPressed("up arrow")) {
        this.stage.vars.gravity = 15;
      }
      if (this.touching(Color.rgb(255, 160, 0))) {
        this.stage.vars.gravity += -5;
      }
      this.y += this.stage.vars.gravity;
      this.stage.vars.gravity += -0.5;
      yield;
    }
  }

  *whenKeyLeftArrowPressed() {
    if (this.stage.vars.direction == 1) {
      this.costume = "costume2";
      this.stage.vars.direction = -1;
    }
  }

  *whenKeyUpArrowPressed() {
    if (this.stage.vars.jumps > 0) {
      this.stage.vars.yforce = 10;
      this.stage.vars.jumps += -10;
    }
  }

  *whenKeyRightArrowPressed() {
    if (this.stage.vars.direction == -1) {
      this.costume = "Carl";
      this.stage.vars.direction = 1;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.costume = "costume3";
        this.move(5);
      }
      if (this.keyPressed("left arrow")) {
        this.costume = "costume2";
        this.move(-5);
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.visible = true;
    this.stage.costume = "Level 1";
    this.stage.watchers.lives.visible = true;
    this.stage.vars.lives = 3;
    this.y = -45;
    this.goto(-209, -45);
    this.broadcast("Spike");
    this.broadcast("Spike2");
    this.broadcast("Spike3");
    this.broadcast("Spike4");
    this.broadcast("Spike5");
    this.broadcast("Spike6");
    this.broadcast("Spike7");
    this.broadcast("Spike8");
    this.broadcast("Spike9");
    this.broadcast("Spike10");
    this.broadcast("Spike11");
    this.broadcast("Spike12");
    this.broadcast("Spike13");
    this.broadcast("Spike14");
    this.broadcast("Spike15");
    this.broadcast("Spike16");
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (
        this.touching(Color.rgb(255, 140, 140)) ||
        this.touching(this.sprites["Sprite2"].andClones()) ||
          this.touching(this.sprites["Sprite3"].andClones()) ||
            this.touching(this.sprites["Sprite4"].andClones()) ||
              this.touching(this.sprites["Sprite5"].andClones()) ||
                this.touching(this.sprites["Sprite6"].andClones()) ||
                  this.touching(this.sprites["Sprite7"].andClones()) ||
                    this.touching(this.sprites["Sprite8"].andClones()) ||
                      this.touching(this.sprites["Sprite9"].andClones()) ||
                        this.touching(this.sprites["Sprite10"].andClones()) ||
                          this.touching(this.sprites["Sprite11"].andClones()) ||
                            this.touching(
                              this.sprites["Sprite12"].andClones()
                            ) ||
                              this.touching(
                                this.sprites["Sprite13"].andClones()
                              ) ||
                                this.touching(
                                  this.sprites["Sprite14"].andClones()
                                ) ||
                                  this.touching(
                                    this.sprites["Sprite15"].andClones()
                                  ) ||
                                    this.touching(
                                      this.sprites["Sprite16"].andClones()
                                    ) ||
                                      this.touching(
                                        this.sprites["Sprite17"].andClones()
                                      )
      ) {
        this.stage.costume = "Level 1";
        this.goto(-209, -43);
        this.stage.vars.lives += -1;
        this.broadcast("Lost life");
        this.broadcast("Spike");
        this.broadcast("Spike2");
        this.broadcast("Spike3");
        this.broadcast("Spike4");
        this.broadcast("Spike5");
        this.broadcast("Spike6");
        this.broadcast("Spike7");
        this.broadcast("Spike8");
        this.broadcast("Spike9");
        this.broadcast("Spike10");
        this.broadcast("Spike11");
        this.broadcast("Spike12");
        this.broadcast("Spike13");
        this.broadcast("Spike14");
        this.broadcast("Spike15");
        this.broadcast("Spike16");
        this.broadcast("levelbarrier");
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.stage.vars.lives < 0 || this.stage.vars.lives == 0) {
        this.visible = false;
        this.stage.watchers.lives.visible = false;
        this.broadcast("Hide");
        this.broadcast("HideBarrier");
        this.stage.costume = "Game Over";
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.touching(this.sprites["Barrier1"].andClones())) {
        this.broadcast("Level 2");
        this.broadcast("Hide");
        this.stage.costume = "Level 2";
        this.goto(-214, -140);
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (this.touching(this.sprites["Barrier2"].andClones())) {
        this.stage.costume = "Level 3";
        this.broadcast("Level 3");
        this.goto(-229, -65);
      }
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    while (true) {
      if (this.touching(this.sprites["Barrier3"].andClones())) {
        this.stage.costume = "Level 4";
        this.broadcast("Level 4");
        this.goto(-50, -118);
      }
      yield;
    }
  }

  *whenGreenFlagClicked9() {
    while (true) {
      if (this.touching(this.sprites["Barrier4"].andClones())) {
        this.broadcast("Level 5");
        this.broadcast("Hide");
        this.stage.costume = "Level 5";
        this.goto(-240, 99);
      }
      yield;
    }
  }

  *whenGreenFlagClicked10() {
    while (true) {
      if (this.touching(this.sprites["Barrier5"].andClones())) {
        this.stage.costume = "Level 6";
        this.broadcast("Level 6");
        this.broadcast("Hide");
      }
      yield;
    }
  }

  *whenGreenFlagClicked11() {
    while (true) {
      if (this.touching(Color.rgb(255, 255, 255))) {
        this.move(-5);
      }
      yield;
    }
  }

  *whenGreenFlagClicked12() {
    while (true) {
      if (this.touching(Color.rgb(255, 248, 248))) {
        this.move(5);
      }
      yield;
    }
  }
}
