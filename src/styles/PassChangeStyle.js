import styled from "@emotion/styled";

export const PassChangeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 30px;
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
  .buttons {
    width: 100%;
    padding-top: 20px;
    button {
      width: 350px;
      height: 45px;
      font-size: 17px;
      font-weight: 600;
      color: #f7f7f7;
      background: #b99470;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;
