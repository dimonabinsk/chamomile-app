/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import catalog from "./fakeApi/catalog.json";
import httpServices from "../../../services/http.services";

const useMockData = () => {
  const statusConst = {
    idle: "Загрузка не началась",
    pending: "Процесс загрузки начался",
    success: "Успешно загружено",
    error: "Ошибка загрузки",
  };
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(statusConst.idle);
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  const sumCount = catalog.length;

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const updateProgress = () => {
    if (count !== 0 && status === statusConst.idle) {
      setStatus(statusConst.pending);
    }
    const newProgress = Math.floor((count / sumCount) * 100);
    if (progress < newProgress) {
      setProgress(() => newProgress);
    }

    if (newProgress === 100) {
      setStatus(statusConst.success);
    }
  };

  useEffect(() => {
    updateProgress();
  }, [count]);

  async function initialize() {
    try {
      for (const item of catalog) {
        await httpServices.put("catalog/" + item._id, item);
        incrementCount();
      }
      //   for (const quality of qualities) {
      //     await httpServices.put("quality/" + quality._id, quality);
      //     incrementCount();
      //   }
      //   for (const user of users) {
      //     await httpServices.put("user/" + user._id, user);
      //     incrementCount();
      //   }
    } catch (e) {
      setError(e);
      setStatus(statusConst.error);
    }
  }

  return { error, initialize, progress, status };
};

export default useMockData;
