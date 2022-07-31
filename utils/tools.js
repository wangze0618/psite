export const countDown = (durition = 5) => {
  let timer = null;
  clearTimeout(timer);

  timer = setInterval(() => {
    if (durition <= 0) {
      return;
    }
    durition--;
    console.log(durition);
  }, 1000);
};
