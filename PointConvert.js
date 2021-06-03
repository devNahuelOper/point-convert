
function convertToPixels(container, x, y) {
  let cHighX = container[0][0];
  let cLowX = container[0][0];
  let cHighY = container[0][1];
  let cLowY = container[0][1];

  for (let coords of container) {
    if (cHighX < coords[0]) {
      cHighX = coords[0];
    }
    if (cLowX > coords[0]) {
      cLowX = coords[0];
    }
    if (cHighY < coords[1]) {
      cHighY = coords[1];
    }
    if (cLowY > coords[1]) {
      cLowY = coords[1];
    }
  }

  y *= -1;

  let pointX = Math.round(((x + 1) / 2) * (cHighX - cLowX) + cLowX);
  let pointY = Math.round(((y + 1) / 2) * (cHighY - cLowY) + cLowY);

  const p = [pointX, pointY];

  return p;
}

// console.log(
//   convertToPixels(
//     [
//       [2, 3],
//       [4, 6],
//     ],
//     120,
//     120
//   )
// );

// Expected Output: [ 123, -175 ]

// console.log(
//   convertToPixels([
//     [-0.97, -0.97],
//     [-0.97, 0.97],
//     [0.97, 0.97],
//     [0.97, -0.97],
//   ], -0.97, -0.97)
// );

// ----------------------------- pointInclude -------------------------------------

const motionballs = [
  {
    x: 467,
    y: 363.015625,
    width: 12,
    height: 12,
    top: 363.015625,
    right: 479,
    bottom: 375.015625,
    left: 467,
  },
  {
    x: 765,
    y: 363.015625,
    width: 12,
    height: 12,
    top: 363.015625,
    right: 777,
    bottom: 375.015625,
    left: 765,
  },
  {
    x: 467,
    y: 561.015625,
    width: 12,
    height: 12,
    top: 561.015625,
    right: 479,
    bottom: 573.015625,
    left: 467,
  },
  {
    x: 765,
    y: 561.015625,
    width: 12,
    height: 12,
    top: 561.015625,
    right: 777,
    bottom: 573.015625,
    left: 765,
  },
];

function pointInclude() {
  const p0 = [motionballs[0].x, motionballs[0].y];
  const p1 = [motionballs[1].x, motionballs[1].y];
  const p2 = [motionballs[2].x, motionballs[2].y];
  const p3 = [motionballs[3].x, motionballs[3].y];
  const include = [p0, p1, p2, p3];

  return include;
}

// console.log(pointInclude());


// ----------------------------- convertToPoints -------------------------------------

function convertToPoints(container, include) {
  let x, y;
  let cHighX = container[0][0];
  let cLowX = container[0][0];
  let cHighY = container[0][1];
  let cLowY = container[0][1];

  const conv = Array.from(Array(include.length), () => Array(2));
  
  for (let coords of container) {
    if (cHighX < coords[0]) {
      cHighX = coords[0];
    }
    if (cLowX > coords[0]) {
      cLowX = coords[0];
    }
    if (cHighY < coords[1]) {
      cHighY = coords[1];
    }
    if (cLowY > coords[1]) {
      cLowY = coords[1];
    }
  }

  for (let j = 0; j < include.length; ++j) {
    x = include[j][0];
    y = include[j][1];

    conv[j][0] = (((x - cLowX) / (cHighX - cLowX)) * 2) - 1;
    conv[j][1] = ((((y - cLowY) / (cHighY - cLowY)) * 2) - 1) * -1;
  }

  return conv;
}

// INContainer: {{2,3},{4,6}} | IN Include: {{124,90},{450,600}}

// OUT:  {{121,-57},{447,-397}}​

console.log(convertToPoints([[2,3], [4,6]], [[124, 90], [450, 600]]));



module.exports = {
  convertToPixels,
  convertToPoints,
  pointInclude,
};

