import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url, options = { method: "GET" }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const optionsString = JSON.stringify(options);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { ...options });
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url, optionsString]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
