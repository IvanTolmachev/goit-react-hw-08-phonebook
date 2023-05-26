import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box>
      <p>
        Привіт! <b>{user.email}</b>{' '}
      </p>
      <button
        className="form-button"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </Box>
  );
};

export default UserMenu;
