import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url?: string, debouncedValue?: string) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    if (debouncedValue !== "") {
      const fetchData = async () => {
        setStatus("fetching");
        const response = await axios.get(`${url}`);
        const data = await response.data.results;
        setData(data);
        setStatus("fetched");
      };
      fetchData();
    }
  }, [url]);

  return { status, data };
};

export default useApi;
