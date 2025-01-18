import styled from 'styled-components';


export function ButtonDone (props:React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...props}>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
        <path
          fill="#0184CF"
          d="m8.287 19.737-6.973-6.974a1.073 1.073 0 0 1 0-1.517L2.831 9.73a1.073 1.073 0 0 1 1.518 0l4.697 4.697L19.108 4.365a1.073 1.073 0 0 1 1.517 0l1.517 1.517a1.073 1.073 0 0 1 0 1.517L9.805 19.737a1.073 1.073 0 0 1-1.518 0"
        ></path>
      </svg>
    </Button>
  )
};

export function ButtonCancel  (props:React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...props}>
       <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            fillOpacity="0.7"
            d="M17.537 4.99a1.71 1.71 0 1 1 2.417 2.417l-5.01 5.01a.07.07 0 0 0-.02.05.07.07 0 0 0 .02.05l5.01 5.01a1.71 1.71 0 1 1-2.418 2.417l-5.009-5.009a.07.07 0 0 0-.1 0l-5.01 5.01a1.709 1.709 0 1 1-2.418-2.418l5.01-5.01a.07.07 0 0 0 0-.1l-5.01-5.01A1.71 1.71 0 0 1 7.416 4.99l5.01 5.01a.07.07 0 0 0 .05.02.07.07 0 0 0 .05-.02z"
          ></path>
        </svg>
    </Button>
  )
};


const Button = styled.button`
  display: grid;
  place-content: center;
  width: 40px;
  height: 40px;
  background-color: #363636;
  transition: 0.2s ease;
  border-radius: 50%;
  &:hover, &:active, &:focus-visible {
    background-color: #505050;
  }
`;
