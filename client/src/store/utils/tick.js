const tick = (subscriber, time) => {
  let timer = null;
  const refetch = () => {
    subscriber();
    timer = setTimeout(refetch, time);
  };
  refetch();

  return () => {
    clearTimeout(timer);
  };
};

export default tick;
