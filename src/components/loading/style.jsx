import styled from "styled-components";

export const LoadingSymbol = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: auto;
    border-width: 5px;
    border-style: solid;
    border-color: var(--secondary-color) var(--secondary-color) transparent;);
    animation: spin 1.5s linear infinite;
    @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`


