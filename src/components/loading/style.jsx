import styled from "styled-components";

export const LoadingSymbol = styled.div`
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: auto;
    background: linear-gradient(
        45deg,
        var(--background-main),
        var(--secondary-color)
    );
    animation: spin 1s linear infinite;

    @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const CenterDiv = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--background-main);
`

