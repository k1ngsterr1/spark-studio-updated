import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnOnLoader, turnOffLoader } from "@shared/lib/redux/loaderSlice";

export const useFetchDataWithLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      dispatch(turnOnLoader());
      setTimeout(() => {
        dispatch(turnOffLoader());
      }, 2700);
    };

    loadData();
  }, [dispatch]);
};
