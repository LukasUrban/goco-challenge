import styled from 'styled-components';

export const PageStyled = styled.div`
  .container {
    max-width: 100%;
    width: 720px;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const SpinnerStyled = styled.svg`
    animation: rotate 2s linear infinite;
    position: fixed;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;

    .path {
      stroke: #0070f3;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
