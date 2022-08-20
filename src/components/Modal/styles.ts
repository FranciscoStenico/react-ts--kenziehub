import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background-color: #0007;
  backdrop-filter: blur(2px);

  form {
    position: relative;
    justify-content: flex-end;
    overflow: hidden;
    min-height: unset;
    padding: 4rem 1rem 1rem;

    header {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
        box-sizing: border-box;
        background-color: var(--color-grey-2);

        svg {
            cursor: pointer;
        }
    }
  }

  .double__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      width: 45%;
    }
  }
`;


