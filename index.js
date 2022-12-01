import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Carl from "./Carl/Carl.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import Sprite13 from "./Sprite13/Sprite13.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Sprite15 from "./Sprite15/Sprite15.js";
import Sprite16 from "./Sprite16/Sprite16.js";
import Sprite17 from "./Sprite17/Sprite17.js";
import Barrier1 from "./Barrier1/Barrier1.js";
import Barrier2 from "./Barrier2/Barrier2.js";
import Barrier3 from "./Barrier3/Barrier3.js";
import Barrier4 from "./Barrier4/Barrier4.js";
import Barrier5 from "./Barrier5/Barrier5.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Carl: new Carl({
    x: -174,
    y: -56.5,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 22
  }),
  Sprite2: new Sprite2({
    x: -41,
    y: -50,
    direction: 1,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 16
  }),
  Sprite3: new Sprite3({
    x: -41,
    y: -70,
    direction: 1,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 17
  }),
  Sprite4: new Sprite4({
    x: -41,
    y: -95,
    direction: 1,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 18
  }),
  Sprite5: new Sprite5({
    x: -41,
    y: -118,
    direction: 1,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 19
  }),
  Sprite6: new Sprite6({
    x: 124,
    y: -49,
    direction: 1,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 20
  }),
  Sprite7: new Sprite7({
    x: 124,
    y: -70,
    direction: 1,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 21
  }),
  Sprite8: new Sprite8({
    x: 124,
    y: -92,
    direction: 1,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 11
  }),
  Sprite9: new Sprite9({
    x: 123.90082791207578,
    y: -115.03921330404236,
    direction: 1.395726812313029,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 6
  }),
  Sprite10: new Sprite10({
    x: 66.01603787993288,
    y: -54.0154160970709,
    direction: 177.90986965736172,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 1
  }),
  Sprite11: new Sprite11({
    x: 65.52472272527669,
    y: -73.96209686707398,
    direction: 177.90986965736172,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 2
  }),
  Sprite12: new Sprite12({
    x: 65.9516058811738,
    y: -95.22248778918198,
    direction: 177.90986965736172,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 3
  }),
  Sprite13: new Sprite13({
    x: 66.01112349957393,
    y: -115.88600747509584,
    direction: 177.90986965736172,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 8
  }),
  Sprite14: new Sprite14({
    x: -90.63880042755696,
    y: -52.58397818785081,
    direction: 177.90986965736172,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 4
  }),
  Sprite15: new Sprite15({
    x: -91.12418354369557,
    y: -77.8330734143705,
    direction: 177.90986965736172,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 5
  }),
  Sprite16: new Sprite16({
    x: -90.95341618067874,
    y: -96.70182290876102,
    direction: 177.90986965736172,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 10
  }),
  Sprite17: new Sprite17({
    x: -90.92875502014189,
    y: -120.3080890097468,
    direction: 177.90986965736172,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 9
  }),
  Barrier1: new Barrier1({
    x: 150,
    y: 46,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 14
  }),
  Barrier2: new Barrier2({
    x: 154,
    y: 64,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  Barrier3: new Barrier3({
    x: 152,
    y: 27,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Barrier4: new Barrier4({
    x: 188,
    y: 168,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 13
  }),
  Barrier5: new Barrier5({
    x: 187,
    y: 159,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 15
  }),
  Sprite1: new Sprite1({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 23
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
