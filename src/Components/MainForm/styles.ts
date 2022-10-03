import styled from "styled-components";

export const Form = styled.form`
  width: 377px;

  padding: 41px 56px;

  .title {
    color: rgba(101, 101, 101, 1);
    font-style: bold;
    font-size: 24px;

    margin-bottom: 26px;
  }

  .form__container-body {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  .form__container-input {
    display: flex;
    flex-direction: column;
  }

  .form__container-input label {
    color: rgba(101, 101, 101, 1);
    font-size: 14px;
  }

  .form__container-input input {
    width: 251px;
    height: 37px;

    border-radius: 4px;
    border: 1px solid rgba(221, 230, 233, 1);

    padding: 9px;

    &:focus {
      border-color: rgba(102, 175, 233, 1);
    }
  }

  .form__container-input p {
    color: rgba(206, 206, 206, 1);
    font-style: bold;
    font-size: 11px;
  }

  .form__submitButton {
    width: 68px;
    height: 24px;
    background-color: rgba(102, 175, 233, 1);
    border: 1px solid rgba(101, 101, 101, 0.5);
    border-radius: 4px;
    color: white;

    &:hover {
      filter: brightness(1.1);
    }
  }

  .error {
    color: red;
    font-style: bold;
    font-size: 11px;
  }
`;
