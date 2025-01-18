import styled from 'styled-components';

export default (props: React.SVGProps<SVGSVGElement>) => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity="0.8"
      d="M13.934 2.209a1.5 1.5 0 0 0-2.12 0L10.58 3.443l3.977 3.977 1.234-1.233a1.5 1.5 0 0 0 0-2.121zm-.438 6.272L9.52 4.504 2.893 11.13l-.807 4.785 4.785-.808z"
    />
  </StyledIcon>
);


const StyledIcon = styled.svg`
  cursor: pointer;
  &:hover, &:active, &:focus-visible {
    path {
      fill: #0184CF;
    }
  }
`;