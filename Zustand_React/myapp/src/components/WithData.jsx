import { useEffect, useState } from "react";

const withData = (fetchFn) => {
  return (WrappedComponent) => {
    return (props) => {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      useEffect(() => {
        let isMounted = true;
        const getData = async () => {
          try {
            const result = await fetchFn();
            setData(result);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
        getData();

        return () => {
          isMounted = false;
        };
      }, []);
      return (
        <WrappedComponent
          isLoading={loading}
          error={error}
          data={data}
          {...props}
        />
      );
    };
  };
};

export default withData;
