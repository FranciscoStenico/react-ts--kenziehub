import styled from "styled-components";

export const DashboardContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 95%;

  button {
    width: 2rem;
    height: 2rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content__tech,
  .content__list {
    width: 100%;
    max-width: 55rem;
  }

  .content__tech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    line-height: 0;
    box-sizing: border-box;

    h3 {
      font-size: 1rem;
    }

    svg {
      stroke-width: 1;
      z-index: 0;
    }
  }

  .content__list {
    background-color: var(--color-grey-3);
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 4px;
    min-height: 10rem;
    box-sizing: border-box;
  }

  .list__skill {
    background-color: var(--color-grey-4);
    display: flex;
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 3rem;
    box-sizing: border-box;
    transition: 400ms ease;
    cursor: pointer;

    &:hover {
      background-color: var(--color-grey-2);
    }

    h4 {
      max-width: 20ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.9rem;
    }
  }

  .skill__details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--color-grey-1);
    }

    button {
      display: none;
      border: none;
      background-color: inherit;

      svg {
        color: var(--color-grey-0);
        opacity: 0.6;
        transition: 200ms ease;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .list__empty {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h3 {
      font-weight: 500;
      font-size: 0.9rem;
      color: var(--color-grey-1);
    }

    button {
      background-color: inherit;
      border: 1px solid var(--color-grey-1);
      border-radius: 4px;
      width: fit-content;
      padding: 0.5rem;
      color: var(--color-grey-1);
    }
  }

  @media (min-width: 425px) {
    width: 100%;
    padding: 0 10%;

    .content__list .list__skill button {
      display: flex;
    }
  }
`;
