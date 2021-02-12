import styled, { css } from 'styled-components';
import { ISelectboxProps } from './Select.interface';

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;

  select {
    z-index: 2;
    min-width: 120px;
    width: 100%;
    padding: 8px;
    border: 1px solid;
    border-color: #dedede;
    border-radius: 2px;
    background-color: transparent;
    appearance: none;
    outline: none;
    font-size: 12px;

    &:disabled {
      z-index: 1;
      background-color: #f7f7f7;
      border-color: #dedede;
      color: #cecece;
      opacity: 1;

      &:hover {
        border-color: #dedede;
        cursor: default;
      }
    }

    &:hover {
      border-color: #9cd1ff;
      cursor: pointer;
    }

    &:focus {
      border-color: #9cd1ff;
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.05);

      + .native-select-icon {
        transform: rotate(180deg);
      }
    }
  }

  .native-select-icon {
    z-index: 1;
    position: absolute;
    top: 12px;
    right: 8px;
    height: 12px;
    width: 12px;
    fill: #bdbdbd;
    transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

export const Selectbox = styled.div<ISelectboxProps>`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  min-width: 120px;
  width: 100%;
  padding: 8px;
  border: 1px solid;
  border-color: ${(props) => (props.isOpen ? '#9cd1ff' : '#dedede')};
  border-radius: 2px;
  box-shadow: ${(props) =>
    props.isOpen ? '0px 0px 4px 2px rgba(0, 0, 0, 0.05)' : 'none'};

  &:hover {
    border-color: #9cd1ff;
    cursor: pointer;
  }

  svg {
    height: 12px;
    width: 12px;
    fill: #bdbdbd;
    transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  span {
    line-height: normal;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #f7f7f7;

      &:hover {
        border-color: #dedede;
        cursor: default;
      }

      span {
        color: #cecece;
      }
    `}

  ${(props) => {
    const { size } = props;

    if (size === 'large') {
      return css`
        height: 34px;
      `;
    } else if (size === 'medium') {
      return css`
        height: 28px;
        padding: 4px 8px;
      `;
    } else if (size === 'small') {
      return css`
        height: 24px;
        padding: 2px 8px;
      `;
    }
  }}
`;

export const OptionsWrapper = styled.ul<{ size: string }>`
  z-index: 1;
  position: absolute;

  left: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
  padding: 8px 0px;
  background-color: #fff;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.1);

  ${(props) => {
    const { size } = props;

    if (size === 'large') {
      return css`
        top: 34px;
      `;
    } else if (size === 'medium') {
      return css`
        top: 28px;
      `;
    } else if (size === 'small') {
      return css`
        top: 24px;
      `;
    }
  }}
`;
