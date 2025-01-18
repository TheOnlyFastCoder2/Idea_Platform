import styled from 'styled-components';

export default function (props:React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonAdd {...props}>
        + Добавить
    </ButtonAdd>
  )
};

const ButtonAdd = styled.button`
  color: #a7a7a7;
  align-content: center;
  &:hover, &:active, &:focus-visible {
    color: #0184CF;
  }
`;