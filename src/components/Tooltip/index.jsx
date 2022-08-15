import { useContext } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { SwitchContext } from "../../contexts/SwitchContext";

import { ErrorTooltip } from "./styles";

const Tooltip = ({ children }) => {
  const { isOpened } = useContext(SwitchContext);
  return (
    <ErrorTooltip>
      <BiErrorCircle />
      <p className={isOpened.modal_window ? "modal-tooltip" : "tooltip"}>{children}</p>
    </ErrorTooltip>
  );
};

export default Tooltip;
