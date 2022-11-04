import dayjs from 'dayjs';

const now = dayjs();
now.format();
const createAt = dayjs('2022-11-04T00:01:45.923928');
let diff = now.diff(createAt, 'second');
console.log('초 diff', diff);
if (diff >= 86400) {
  diff = now.diff(createAt, 'day');
  console.log(`${diff}는 1일이상`);
} else if (diff >= 3600) {
  diff = now.diff(createAt, 'hour');
  console.log(`${diff}는 1시간이상`);
} else if (diff >= 59) {
  diff = now.diff(createAt, 'minute');
  console.log(`${diff}는 1분이상`);
} else console.log('diff는 초단위');
// secs mins hours days  Oct 30 at 12:21
// if (diff >= 59) console.log('diff는 1분이상');
// if (diff >= 59) console.log('diff는 1분이상');
