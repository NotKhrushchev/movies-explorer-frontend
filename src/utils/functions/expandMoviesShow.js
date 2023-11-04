const getMoviesShowParam = () => {
  const counter = {initRows: 24, step: 6};
  if (window.innerWidth < 1860) {
    counter.initRows = 20;
    counter.step = 5;
  }
  if (window.innerWidth < 1570) {
    counter.initRows = 16;
    counter.step = 4;
  } 
  if (window.innerWidth < 1280) {
    counter.initRows = 12;
    counter.step = 3;
  }
  if (window.innerWidth < 990) {
    counter.initRows = 8;
    counter.step = 2;
  }
  if (window.innerWidth < 768) {
    counter.initRows = 5;
    counter.step = 2;
  }

  return counter;
};

const handleResize = (setCount) => {
  console.log('sdsdfsdf');
  if (window.innerWidth >= 1860) {
    setCount(getMoviesShowParam().initRows);
  } else if (window.innerWidth < 1860) {
    setCount(getMoviesShowParam().initRows);
  } else if (window.innerWidth < 1570) {
    setCount(getMoviesShowParam().initRows);
  } else if (window.innerWidth < 1280) {
    setCount(getMoviesShowParam().initRows);
  } else if (window.innerWidth < 990) {
    setCount(getMoviesShowParam().initRows);
  } else if (window.innerWidth < 768) {
    setCount(getMoviesShowParam().initRows);
  }
};

export {
  getMoviesShowParam,
  handleResize
}