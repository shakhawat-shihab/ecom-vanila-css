import { useState } from "react";
import axiosInstanceAuth from "../utils/authAxiosCreate";

const useAuthHook = () => {
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  const getLogIn = (data) => {
    setIsLoadingAuth(true);
    axiosInstanceAuth
      .post(`/log-in`, data)
      .then((res) => res.data)
      .then((data) => {
        setIsLoadingAuth(false);
        console.log(data?.data?.token);
        if (data?.success) {
          alert(data?.message);
          localStorage.setItem("token", data?.data?.token);
        } else {
          alert(data?.message);
        }
      })
      .catch((e) => {
        console.log("Error: ", e?.response?.statusText);
      })
      .finally(() => {
        setIsLoadingAuth(false);
      });
  };

  return { getLogIn, isLoadingAuth };
};

export default useAuthHook;
