import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import { makeStyles } from "@mui/styles";
import ProfileLoader from "../components/ProfileLoader";
import Repository from "../components/Repository";
import RepositoryLoader from "../components/RepositoryLoader";
import {
  getProfileDetails,
  getAllRepositories,
} from "../container/actions/index";
import { useDispatch, useSelector } from "react-redux";

const ProfileDisplay = () => {
  const useStyles = makeStyles((theme) => ({
    mainContainer: {
      padding: "40px 80px",
      "@media (max-width:768px)": {
        padding: "20px",
      },
    },
  }));

  const info = useSelector((state) => state.repository);
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("user");
  const dispatch = useDispatch();
  const [profileLoader, setProfileLoader] = useState(false);
  const [repositoryLoader, setRepositoryLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const changePage = (event, page) => {
    setPage(page);
  };

  const changeItemsPerPage = (value) => {
    setItemsPerPage(value);
  };

  useEffect(() => {
    setProfileLoader(true);
    setRepositoryLoader(true);
    dispatch(getProfileDetails(userName))
      .then(() => {
        setProfileLoader(false);
      })
      .catch(() => {
        setProfileLoader(false);
      });
    dispatch(getAllRepositories(page, itemsPerPage, userName))
      .then(() => {
        setRepositoryLoader(false);
      })
      .catch(() => {
        setRepositoryLoader(false);
      });
  }, []);

  const profileInfo = info.profileInfo;
  const repositoryInfo = info.repositoryList;
  const totalPages = Math.ceil(profileInfo.public_repos / itemsPerPage);

  React.useEffect(() => {
    setRepositoryLoader(true);
    dispatch(getAllRepositories(page, itemsPerPage, userName))
      .then(() => {
        setRepositoryLoader(false);
      })
      .catch(() => {
        setRepositoryLoader(false);
      });
  }, [page, itemsPerPage]);

  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      {profileLoader ? (
        <ProfileLoader />
      ) : (
        <Profile information={profileInfo} />
      )}
      {repositoryLoader ? (
        <RepositoryLoader />
      ) : (
        <Repository
          pages={totalPages}
          repositories={repositoryInfo}
          onPageChange={changePage}
          onItemPerPageChange={changeItemsPerPage}
          itemsPerPage={itemsPerPage}
          currentPage={page}
        />
      )}
    </div>
  );
};

export default ProfileDisplay;
