import React, { useState, useEffect } from 'react';
import UserItem from '../UserItem/UserItem';
import Loading from '../Loading/Loading.jsx';
import PagesSelect from '../PagesSelect/PagesSelect.jsx';
import Error from '../Error/Error';
import './UserList.module.scss';
import { getUsers } from '../../api';

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, seIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {loadData()},[]);
  useEffect(() => {loadData()},[currentPage]);

  async function loadData(page=currentPage,results=3) {
    try {
      seIsLoading(true);
      const data = await getUsers(page,results);
      console.log(data);
      setUserData([...data]);
      seIsLoading(false);
      setError(null);
    } catch (error) {
      seIsLoading(false);
      setError(error.message);
    }
  }

  const mapUsers = () => {
    if (userData) {
      return userData.map((user) => (
        <UserItem key={user.cell} userDataObj={user} />
      ));
    }
  };
  const clearError = () => {
    setError(null);
    loadData();
  };
  const pageSelectHandler = (pageNum)=>{
    console.log(`page ${pageNum}`)
    setCurrentPage(pageNum)
  }
  return (
    <>
      <PagesSelect pageSelectHandler={pageSelectHandler} limit={20}/>
      <ul>
        {error && <Error txt={error} clearError={() => {clearError()}}/>}
        {mapUsers()}
        {/* {isLoading ? <Loading/> : mapUsers()} */}
      </ul>
    </>
  );
};

export default UserList;
