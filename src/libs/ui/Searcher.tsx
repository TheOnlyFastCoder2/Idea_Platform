import React from 'react';
import styled from 'styled-components';


const SvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="#fff"
      fillOpacity="0.6"
      fillRule="evenodd"
      d="M14.383 15.445a6.75 6.75 0 1 1 1.06-1.06L20.6 19.54a.75.75 0 1 1-1.06 1.06zm-7.925-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005-.005.004a5.25 5.25 0 0 1-7.42-.004"
      clipRule="evenodd"
    ></path>
  </svg>
);


export default function (props: React.HTMLAttributes<HTMLInputElement>) {
  return (
    <Searcher>
      <SvgIcon/>
      <input  {...props} placeholder='Поиск'/>
    </Searcher>
  )
};

const Searcher = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 430px;
  height: 40px;
  padding: 9.5px 20px;
  border-radius: 20px;
  border: 1px solid #707070;
  background-color: #333333;
  transition: 0.2s ease;

  &:hover, &:focus-within {border-color: #26475a;}
  &:focus, &:focus-visible, &:active, &:focus,  &:focus-within{
    outline: 4px solid #135479;
  }

  input {
    flex-grow: 1;
    color: #e3e3e3;
    &::placeholder {
      color: #707070;
    }
  }
`;