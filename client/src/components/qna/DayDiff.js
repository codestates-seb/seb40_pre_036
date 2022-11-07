import React from 'react';
import dayjs from 'dayjs';

function DayDiff({ createdAt }) {
  const now = dayjs();
  const ago = dayjs(createdAt);
  let diff = now.diff(ago, 'hour') - 9; // utc를 한국 표준시로

  if (diff >= 720) {
    diff = `${Math.floor(diff / 720)} months ago`;
  } else if (diff >= 168) {
    diff = `${Math.floor(diff / 168)} weeks ago`;
  } else if (diff >= 24) {
    diff = `${Math.floor(diff / 24)} days ago`;
  } else {
    diff = 'today';
  }

  return <time>{diff}</time>;
}

export default DayDiff;
