const CINEMAS_DATA = require("./cinemas");

const ALL_CINEMAS_HALLS = [
  {
    id: 1,
    title: 'Sun',
    capacity: 12,
    cinemaId: CINEMAS_DATA[0].id,
  },
  {
    id: 2,
    title: 'Cloud',
    capacity: 12,
    cinemaId: CINEMAS_DATA[1].id,
  },
  {
    id: 3,
    title: 'Star',
    capacity: 12,
    cinemaId: CINEMAS_DATA[2].id,
  },
];

module.exports = ALL_CINEMAS_HALLS;
