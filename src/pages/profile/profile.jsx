import React, { useEffect, useState } from "react";
import "./profile.style.scss";
import Button from "../../components/button/button";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState({
  //   userName: "shakhawat",
  //   email: "shihabchtg@gmail.com",
  //   phone: "01843534523",
  // });
  const [user, setUser] = useState({});
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  const redirectToProfileEdit = () => {
    navigate("/profile/edit");
  };
  const redirectToProfileDelete = () => {
    navigate("/profile/delete");
  };

  const updateUser = (newData) => {
    console.log(newData);
    setUser(newData);
  };

  const deleteUser = (email) => {
    // alert("Are you sure to delete your account?");
    setUser(newData);
    console.log(email);
  };

  return (
    <div className="profile-view-container">
      <div className="profile-section">
        <div className="profile-view">
          <div>
            <h2>This is my profile</h2>
            <p>User Name: {user.userName}</p>
            <p>Email: {user.email}</p>
            <p>Phone No: {user.phone}</p>
            <Button
              customClass="blue-btn"
              clickFunctionality={redirectToProfileEdit}
            >
              Edit Profile
            </Button>
            <span style={{ marginLeft: "15px" }}></span>
            <Button
              customClass="red-btn"
              clickFunctionality={redirectToProfileDelete}
            >
              Delete Profile
            </Button>
          </div>
        </div>
        {/* <div> */}
        <Outlet context={[user, updateUser, deleteUser]} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Profile;
