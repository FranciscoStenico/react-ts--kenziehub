import styled from "styled-components";

interface IStyledButton {
  buttonType: boolean
}

export const PrimaryButton = styled.button`
  height: 3rem;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  background-color: ${({buttonType}: IStyledButton) => buttonType ? "var(--color-primary)" : "var(--color-grey-1)"};
  color: var(--color-grey-0);
  font-weight: 500;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: ${({buttonType}: IStyledButton) => buttonType ? "var(--color-primary-focus)" : "var(--color-grey-10)"};
  }

  &:disabled {
    background-color: var(--color-primary-negative);
    cursor: unset;
  }
`;

export const SecondaryButton = styled.button`
  border: none;
  background-color: var(--color-grey-3);
  font-weight: 500;
  color: var(--color-grey-0);
  padding: 0.6rem 1rem;
  border-radius: 4px;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: var(--color-grey-2);
  }
`;
