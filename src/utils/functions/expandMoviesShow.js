import { screenWidth } from "../constants";

const getMoviesShowParam = () => {
  const counter = {initRows: 24, step: 6};
  if (window.innerWidth < screenWidth.max) {
    counter.initRows = 20;
    counter.step = 5;
  }
  if (window.innerWidth < screenWidth.beforeMax) {
    counter.initRows = 16;
    counter.step = 4;
  } 
  if (window.innerWidth < screenWidth.medium) {
    counter.initRows = 12;
    counter.step = 3;
  }
  if (window.innerWidth < screenWidth.small) {
    counter.initRows = 8;
    counter.step = 2;
  }
  if (window.innerWidth < screenWidth.smallest) {
    counter.initRows = 5;
    counter.step = 2;
  }

  return counter;
};

const handleResize = (setCount) => {
  if (window.innerWidth >= screenWidth.max) {
    setCount(getMoviesShowParam().initRows);
  } else if (window.innerWidth < screenWidth.max) {
    setCount(getMoviesShowParam().initRows);
  } else if (window.innerWidth < screenWidth.beforeMax) {
    setCount(getMoviesShowParam().initRows);
  } else if (window.innerWidth < screenWidth.medium) {
    setCount(getMoviesShowParam().initRows);
  } else if (window.innerWidth < screenWidth.small) {
    setCount(getMoviesShowParam().initRows);
  } else if (window.innerWidth < screenWidth.smallest) {
    setCount(getMoviesShowParam().initRows);
  }
};

export {
  getMoviesShowParam,
  handleResize
}