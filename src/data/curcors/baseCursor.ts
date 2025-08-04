const EMPTY_SIZE = 5
const FULL_SIZE = 60

const EMPTY_CENTER = EMPTY_SIZE
const EMPTY_CENTER_MINUS = -1 * EMPTY_SIZE
const SIZE = FULL_SIZE
const SIZE_MINUS = -1 * FULL_SIZE

export const baseCursor = [
    {
        xStart: EMPTY_CENTER,
        yStart: 0,
        xEnd: SIZE,
        yEnd: 0,
    },
    {
        xStart: 0,
        yStart: EMPTY_CENTER,
        xEnd: 0,
        yEnd: SIZE,
    },
    {
        xStart: EMPTY_CENTER_MINUS,
        yStart: 0,
        xEnd: SIZE_MINUS,
        yEnd: 0,
    },
    {
        xStart: 0,
        yStart: EMPTY_CENTER_MINUS,
        xEnd: 0,
        yEnd: SIZE_MINUS,
    },
    {
        xStart: EMPTY_CENTER_MINUS,
        yStart: EMPTY_CENTER_MINUS,
        xEnd: EMPTY_CENTER_MINUS,
        yEnd: EMPTY_CENTER,
    },
    {
        xStart: EMPTY_CENTER,
        yStart: EMPTY_CENTER,
        xEnd: EMPTY_CENTER,
        yEnd: EMPTY_CENTER_MINUS,
    },
    {
        xStart: EMPTY_CENTER,
        yStart: EMPTY_CENTER,
        xEnd: EMPTY_CENTER_MINUS,
        yEnd: EMPTY_CENTER,
    },
    {
        xStart: EMPTY_CENTER_MINUS,
        yStart: EMPTY_CENTER_MINUS,
        xEnd: EMPTY_CENTER,
        yEnd: EMPTY_CENTER_MINUS,
    },
]