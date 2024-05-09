import styled from "@emotion/styled";

export const UserInfoWrap = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export const UserInputWrap = styled.div`
  width: 100%;
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      font-size: 16px;
      font-weight: 500;
      > label {
        margin-left: 2px;
        width: 350px;
      }
      > input {
        width: 350px;
        height: 30px;
        border: none;
        border-bottom: 1px solid #583732;
        padding: 0 5px;
        font-size: 16px;
      }
      input::placeholder {
        font-size: 13px;
      }
    }
    .password {
      > div {
        width: 350px;
        display: flex;
        justify-content: space-between;
        padding-right: 5px;
        margin-left: 2px;
        button {
          width: 70px;
          height: 25px;
          background: #583732;
          color: #fff;
          border: none;
          cursor: pointer;
          border-radius: 4px;
        }
      }
    }
    > ul {
      width: 350px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        width: 160px;
        > label {
          margin-left: 2px;
        }
        > input {
          width: 160px;
          height: 25px;
          border: none;
          border-bottom: 1px solid #583732;
          padding: 0 5px;
          font-size: 16px;
          margin-top: 5px;
        }
        input::placeholder {
          font-size: 13px;
        }
      }
    }
    .buttons {
      width: 100%;
      button {
        width: 350px;
        height: 45px;
        font-size: 17px;
        font-weight: 600;
        color: #f7f7f7;
        background: #BF8A30;
        border: none;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
`;

export const UserConfirmWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #444;
  > h3 {
    padding-bottom: 30px;
  }
  > span {
    font-size: 13px;
  }
  > form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
    input {
      width: 330px;
      height: 25px;
      padding: 0 5px;
      font-size: 16px;
      border: none;
      border-bottom: 1px solid #d9d9d9;
    }
    button {
      width: 335px;
      height: 45px;
      font-size: 17px;
      font-weight: 600;
      color: #fff;
      background: #bf8a30;
      border-radius: 8px;
      border: none;
      cursor: pointer;
    }
    .err-message {
      color: #eb5757;
    }
  }
`;
