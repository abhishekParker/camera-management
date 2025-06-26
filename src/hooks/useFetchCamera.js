import { useEffect, useState } from "react";
import { cameras } from "../utils/dummyData";

export const useFetchCamera = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCameras();
  }, []);

  const fetchCameras = async () => {
    setData(cameras);
    try {
      const response = await fetch(
        "https://api-app-staging.wobot.ai/app/v1/fetch/cameras"
      );
      const data = await response.json();
    } catch (error) {
      console.error("Error fetching cameras:", error);
    }
  };

  return { data };
};
