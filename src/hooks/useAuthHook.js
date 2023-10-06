import { useState } from "react";
import axiosInstanceAuth from "../utils/authAxiosCreate";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../store/slices/userSlice";
import { useNavigate } from "react-router";

const useAuthHook = () => {
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getLogIn = (data) => {
    setIsLoadingAuth(true);
    axiosInstanceAuth
      .post(`/log-in`, data)
      .then((res) => res.data)
      .then((data) => {
        setIsLoadingAuth(false);
        console.log(data?.data?.token);
        if (data?.success) {
          // localStorage.setItem("token", data?.data?.token);
          dispatch(addUserInfo(data?.data));
          alert(data?.message);
          navigate("/");
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
