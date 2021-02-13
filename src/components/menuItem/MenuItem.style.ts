import styled, { css } from 'styled-components';
import { IMenuProps } from './MenuItem.interface';

export const Menu = styled.li<IMenuProps>`
  box-sizing: border-box;
  height: 32px;
  width: 100%;
  padding: 0px 16px;
  background-color: ${(props) => (props.selected ? '#f3f3f3' : 'transparent')};
  list-style: none;

  &:hover {
    background-color: #eaf8ff;
    cursor: pointer;
  }

  span {
    font-size: 12px;
    font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
    line-height: 32px;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #f7f7f7;

      &:hover {
        background-color: #f7f7f7;
        cursor: default;
      }

      span {
        color: #cecece;
      }
    `}

   ${(props) =>
    props.focused &&
    css`
      background-color: #f3f3f3;
    `}
`;
