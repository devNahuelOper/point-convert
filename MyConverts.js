// Receives Pixels from the Frontend & returns
// an array of 4 sub-arrays of [X,Y] Coordinates
function convertToPoints({ x, y, height, width }, parent) {
  const [parentHeight, parentWidth] = [parent.clientHeight, parent.clientWidth];

  const nw = getPoint(x, y, parentWidth, parentHeight);
  const ne = getPoint(x + width, y, parentWidth, parentHeight);
  const sw = getPoint(x, y + height, parentWidth, parentHeight);
  const se = getPoint(x + width, y + height, parentWidth, parentHeight);

  return [nw, ne, sw, se];
}

// Helper function that returns one pair of [X, Y] coords for each corner
// based on placement relative to parent, then translated based on a
// (-1.0 - 1.0) XY Quadrant Range.
function getPoint(x, y, parentWidth, parentHeight, fix = 3, obj = false) {
  const decimalX = 1 / (parentWidth / 2 / (x - parentWidth / 2));
  const decimalY = 1 / (parentHeight / 2 / (y - parentHeight / 2));
  const roundX = Number(decimalX.toFixed(fix));
  const roundY = Number(decimalY.toFixed(fix));
  if (obj) {
    return { x: roundX, y: roundY };
  }

  return [roundX, roundY];
}

// -------------------------------------------------------------

/* 
  coordinates --  [[-x,y],[x,y],[-x,-y],[x,-y]]   
  parent -- container element surrounding square coordinates
 */

function convertToPixels(coordinates, parent) {
  const [parentHeight, parentWidth] = [parent.clientHeight, parent.clientWidth];
  const allPixels = coordinates.map(coord => getPixel(coord, parentWidth, parentHeight));
  const allX = allPixels.map(p => p.x);
  const allY = allPixels.map(p => p.y);
  
  const {x, y} = allPixels[0];
  const width = [...new Set(allX)].reduce((x, y) => Math.abs(x - y));
  const height = [...new Set(allY)].reduce((x, y) => Math.abs(x - y));

  return { x, y, height, width };
}
// Input: [[-0.252,-0.292],[0.238,-0.292],[-0.252,0.289],[0.238,0.289]]
// Output: {x: 458, y: 244, height: 200, width: 300}

// parentWidth: 1225
// parentHeight: 689

function getPixel([x, y], parentWidth, parentHeight) {
  const [halfX, halfY]= [parentWidth / 2, parentHeight / 2];
  const percentX = 100 + (100 * x);
  const percentY = 100 + (100 * y);
  const pixelX = Math.round(halfX / (100 / percentX));
  const pixelY = Math.round(halfY / (100 / percentY));
  return { x: pixelX, y: pixelY };
}
