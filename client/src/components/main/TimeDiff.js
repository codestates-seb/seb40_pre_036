import React from 'react';
import dayjs from 'dayjs';

function TimeDiff({ createAt, target }) {
  const now = dayjs();
  const ago = dayjs(createAt);
  let diff = now.diff(ago, 'second') - 32400; // utc를 한국 표준시로

  if (diff >= 86400) {
    diff = `${Math.floor(diff / 86400)} days`;
  } else if (diff >= 3600) {
    diff = `${Math.floor(diff / 3600)} hours`;
  } else if (diff >= 60) {
    diff = `${Math.floor(diff / 60)} mins`;
  } else {
    diff = `${Math.floor(diff)} secs`;
  }

  return (
    <time>
      {target} {diff}
    </time>
  );
}

export default TimeDiff;
