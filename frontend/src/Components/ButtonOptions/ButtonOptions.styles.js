import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 171px;
  height: 40px;
  padding: 8px 16px;
  margin-bottom: 14px;

  border-radius: 4px;
  background-color: #DAF2EC;
  color: #07A46C;
  border: none;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #07A46C;
    color: inherit;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 8px 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #07A46C;
    color: inherit;

  }
`;

export const Icon = styled.span`
  position: absolute;
  top: 35%;
  margin-left: 4px;
`;
