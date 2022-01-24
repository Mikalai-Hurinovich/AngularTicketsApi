const CINEMAS_DATA = require('./cinemas');
const MOVIES_DATA = require('./movies');
const ALL_CINEMAS_HALLS = require('./halls');

const SESSIONS_DATA = [
    {
        id: 1,
        startsAt: `${new Date()}`,
        endsAt: '',
        cinema: CINEMAS_DATA[0],
        movie: MOVIES_DATA[1],
        hall: ALL_CINEMAS_HALLS[0],
        bookedSeats: [],
        availableSeats: [],
    },
    {
        id: 2,
        startsAt: `${new Date(new Date().getTime() + (12 * 60 * 60 * 1000))}`,
        endsAt: '',
        cinema: CINEMAS_DATA[0],
        movie: MOVIES_DATA[2],
        hall: ALL_CINEMAS_HALLS[0],
        bookedSeats: [],
        availableSeats: [],
    },
    {
        id: 3,
        startsAt: `${new Date()}`,
        endsAt: '',
        cinema: CINEMAS_DATA[1],
        movie: MOVIES_DATA[0],
        hall: ALL_CINEMAS_HALLS[1],
        bookedSeats: [],
        availableSeats: [],
    },
    {
        id: 4,
        startsAt: `${new Date(new Date().getTime() + (42 * 60 * 60 * 1000))}`,
        endsAt: '',
        cinema: CINEMAS_DATA[2],
        movie: MOVIES_DATA[2],
        hall: ALL_CINEMAS_HALLS[2],
        bookedSeats: [],
        availableSeats: [],
    },
    {
        id: 5,
        startsAt: `${new Date(new Date().getTime() + (72 * 60 * 60 * 1000))}`,
        endsAt: '',
        cinema: CINEMAS_DATA[1],
        movie: MOVIES_DATA[2],
        hall: ALL_CINEMAS_HALLS[1],
        bookedSeats: [],
        availableSeats: [],
    },
    {
        id: 8,
        startsAt: `${new Date(new Date().getTime() + (72 * 60 * 60 * 1000))}`,
        endsAt: '',
        cinema: CINEMAS_DATA[2],
        movie: MOVIES_DATA[1],
        hall: ALL_CINEMAS_HALLS[2],
        bookedSeats: [],
        availableSeats: [],
    },
    {
        id: 9,
        startsAt: `${new Date(new Date().setHours(new Date().getHours() + 1))}`,
        endsAt: '',
        cinema: CINEMAS_DATA[1],
        movie: MOVIES_DATA[0],
        hall: ALL_CINEMAS_HALLS[1],
        bookedSeats: [],
        availableSeats: [],
    },
];

module.exports = SESSIONS_DATA;

