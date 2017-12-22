import React from "react";

import {
  Bodies,
  Body,
  Composite,
  Engine,
  Events,
  World,
  Vertices,
  Render,
  Runner
} from "matter-js";
const { PI, cos, sin, random } = Math;

let ballCreatedAt = 0;
let balls = 0;

const TWO_PI = 2 * PI;
const bigGearOpts = {
  x: 500,
  y: 325,
  diameter: 378,
  pegCount: 26,
  rotation: 0,
  rotationSpeed: 0.001
};

const smallGearOpts = {
  x: bigGearOpts.x + 280,
  y: bigGearOpts.y,
  diameter: bigGearOpts.diameter / 3,
  pegCount: 10,
  pegWidth: 30,
  pegHeight: 15,
  rotation: -0.33,
  rotationSpeed: -(bigGearOpts.pegCount / 10) * bigGearOpts.rotationSpeed
};

function createGear({
  x,
  y,
  diameter,
  pegCount,
  pegWidth = 35,
  pegHeight = 20,
  rotation = 0
}) {
  const r = diameter / 2;
  const parts = [];

  for (let i = 0; i < pegCount; i++) {
    const segment = TWO_PI / pegCount;
    const angle = i / pegCount * TWO_PI;
    const angle2 = i / pegCount * TWO_PI + segment / 2;
    const x1 = cos(angle);
    const y1 = sin(angle);
    const x2 = cos(angle2);
    const y2 = sin(angle2);
    const cx = x1 * r;
    const cy = y1 * r;
    const cx2 = x2 * r;
    const cy2 = y2 * r;
    const peg = Bodies.rectangle(cx, cy, pegWidth, pegHeight, {
      angle: angle,
      isStatic: true
    });
    const edge = Bodies.rectangle(cx2, cy2, 8, 18, {
      angle: angle2,
      isStatic: true
    });

    parts.push(peg, edge);
  }

  const body = Body.create({ parts, isStatic: true });
  Body.translate(body, { x, y });
  Body.rotate(body, rotation);
  return body;
}

const generateBalls = engine => ({ timestamp }) => {
  if (timestamp - ballCreatedAt > 1000 && balls < 200) {
    ballCreatedAt = timestamp;
    balls = balls + 1;
    let ballBody = Bodies.circle(500, 200, 30 / 1000 * 200, {
      restitution: 0.8,
      torque: -0.05 + random() * 0.1
    });
    World.add(engine.world, ballBody);
  }
};

const turnGears = ({ bigGearBody, smallGearBody }) => ({ timestamp }) => {
  Body.rotate(bigGearBody, bigGearOpts.rotationSpeed);
  Body.rotate(smallGearBody, smallGearOpts.rotationSpeed);
};

const initialize = ({ canvas, height, width }) => {
  const engine = Engine.create();
  const render = Render.create({
    canvas,
    engine: engine,
    options: {
      width: 1200,
      height: 600,
      pixelRatio: 2,
      wireframeBackground: "transparent"
    }
  });

  const bigGearBody = createGear(bigGearOpts);
  const smallGearBody = createGear(smallGearOpts);
  const runner = Runner.create();

  World.add(engine.world, bigGearBody);
  World.add(engine.world, smallGearBody);

  Runner.run(runner, engine);
  Render.run(render);

  Events.on(runner, "beforeTick", turnGears({ bigGearBody, smallGearBody }));
  Events.on(runner, "beforeTick", generateBalls(engine));
};

export default class Cogs extends React.PureComponent {
  componentDidMount() {
    const { canvas } = this;
    const { width, height } = canvas.getBoundingClientRect();
    initialize({
      canvas,
      height,
      width
    });
  }

  render() {
    const { className } = this.props;
    return <canvas className={className} ref={e => (this.canvas = e)} />;
  }
}
