import { useState, useEffect } from "react";

const useFetch = (url, param='GET') => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, {method: param})
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url]);

  return data;
};
export default useFetch;