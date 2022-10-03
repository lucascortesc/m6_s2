import styled from "styled-components";

export const ResultContainer = styled.div`
  background-color: rgba(209, 220, 227, 1);
  padding: 83px 35px;

  width: 231px;

  .result__title {
    color: rgba(61, 117, 187, 1);
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
  }

  .result__separationLine {
    height: 2px;
    width: 100%;
    background-color: rgba(93, 156, 236, 1);
    opacity: 30%;
    margin-top: 4px;
  }

  .result__container {
    height: 184px;
    margin-top: 13px;

    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .result__container p {
    color: rgba(93, 156, 236, 1);
    font-size: 16px;
  }

  .result__price {
    font-weight: bold;
  }
`;
