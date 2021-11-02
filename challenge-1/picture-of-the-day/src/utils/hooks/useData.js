import { useState, useEffect, useContext } from "react";
import { resolveUrl } from "../resolveUrl";
import GlobalContext from "../../providers/GlobalContext";
import { actions } from "../reducer/actions";
import resolveError from "../resolveError";

const useData = (params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const NASA_APOD_API_URL = resolveUrl(params);

        const response = await fetch(NASA_APOD_API_URL);

        const jsonResponse = await response.json();
        const error = resolveError(jsonResponse);

        if (response.statusText !== "OK") {
          dispatch({
            type: actions.setError,
            payload: error,
          });
          setLoading(false);
        } else {
          dispatch({
            type: actions.setError,
            payload: error,
          });
          setData(jsonResponse);
          setLoading(false);
        }
      } catch (err) {
        const error = resolveError(err);
        dispatch({
          type: actions.setError,
          payload: error,
        });
        setLoading(false);
      }
    };

    getData();
  }, [params, dispatch]);

  return { data, loading };
};

export default useData;
