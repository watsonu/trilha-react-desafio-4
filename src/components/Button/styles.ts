import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#81259D')};
  color: #FFF;
  border: 1px solid ${({ disabled }) => (disabled ? '#ccc' : '#81259D')};
  border-radius: 21px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
      opacity: 0.8;
  }
`;
