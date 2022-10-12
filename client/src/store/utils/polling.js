const polling = (url, subscriber, query = {}) => {
  const req = new URL(process.env.CONFIG.API_BASEPATH + url);
  req.search = new URLSearchParams(query);
  let timer = null;
  const refetch = async () => {
    timer = setTimeout(refetch, process.env.CONFIG.POLLING_INTERVAL * 1000);
    const response = await (await fetch(req.toString())).json();
    subscriber(response);
  };
  refetch();

  return () => {
    clearTimeout(timer);
    subscriber = () => {};
  };
};

export default polling;
