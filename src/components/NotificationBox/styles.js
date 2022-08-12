import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const ToastThrower = styled(ToastContainer)`
  --toastify-color-dark: var(--color-grey-3);
  --toastify-icon-color-success: var(--color-success);
  --toastify-color-progress-success: var(--color-success);
  --toastify-icon-color-error: var(--color-negative);
  --toastify-color-progress-error: var(--color-negative);

  .Toastify__toast-theme--dark {
    border: 1px solid var(--color-grey-20);
    font-weight: 600;
    font-size: 0.8rem;
  }
`;
