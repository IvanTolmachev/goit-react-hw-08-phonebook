import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Heder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-bottom: 50px;
  padding: 5px;
  box-shadow: 0px 21px 55px 0px rgba(0, 0, 0, 0.75);
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 17px;
  font-weight: 700;
  height: 40px;
  width: 150px;
  border: 2px solid #c7c7c7;
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    background-color: green;
    color: #fff;
  }
`;
