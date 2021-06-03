const {
  convertToPixels,
  convertToPoints,
  pointInclude,
} = require("./PointConvert");

// -------------------- convertToPixels tests -----------------------

test("converts a 2D array of container corners, along with x and y coordinates into an array of pixel coordinates", () => {
  expect(
    convertToPixels(
      [
        [2, 3],
        [4, 6],
      ],
      120,
      120
    )
  ).toStrictEqual([123, -175]);
});


// -------------------- pointInclude tests -----------------------

// test("returns an array", () => {
//   expect(Array.isArray(pointInclude())).toBe(true);
// });


// -------------------- convertToPoints tests -----------------------

test("converts pixels back to points", () => {
  expect(
    convertToPoints(
      [
        [2, 3],
        [4, 6],
      ],
      [
        [124, 90],
        [450, 600],
      ]
    )
  ).toStrictEqual([
    [121, -57],
    [447, -397],
  ]);
})