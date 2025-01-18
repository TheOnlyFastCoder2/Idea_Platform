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
      fillOpacity="0.6"
      d="M15.545 3.957h-3.518v-.668a1.8 1.8 0 0 0-1.106-1.649 1.8 1.8 0 0 0-.686-.136H7.79a1.79 1.79 0 0 0-1.268.525 1.8 1.8 0 0 0-.517 1.26v.668H2.487a.562.562 0 1 0 0 1.125h1.065v8.82a2.59 2.59 0 0 0 .75 1.845c.491.48 1.15.75 1.838.75h5.715c.687 0 1.347-.27 1.837-.75a2.59 2.59 0 0 0 .75-1.845v-8.82h1.073a.563.563 0 0 0 0-1.125zm-8.4-.668a.65.65 0 0 1 .195-.465.68.68 0 0 1 .465-.195h2.445a.66.66 0 0 1 .472.195c.123.124.193.291.195.465v.668h-3.75zm.997 9.458a.75.75 0 1 1-1.5 0V8.674a.75.75 0 1 1 1.5 0zm3.27 0a.75.75 0 1 1-1.5 0V8.674a.75.75 0 1 1 1.5 0z"
    />
  </StyledIcon>
);


const StyledIcon = styled.svg`
  cursor: pointer;
  &:hover, &:active, &:focus-visible {
    path {
      fill: #FC3639;
    }
  }
`;