import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { HeaderLink, Heder, List } from './Header.styled';

export const Header = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <Heder>
      {!isLogin && (
        <nav>
          <List>
            <li>
              <HeaderLink to="login">logIn</HeaderLink>
            </li>
            <li>
              <HeaderLink to="register">registration</HeaderLink>
            </li>
          </List>
        </nav>
      )}
      <div>{isLogin && <UserMenu />}</div>
    </Heder>
  );
};
