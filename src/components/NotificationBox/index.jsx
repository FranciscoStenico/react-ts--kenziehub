import { Notification, NotificationContainer } from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiHand } from "react-icons/gi"
import { RiErrorWarningFill } from "react-icons/ri";

const NotificationBox = ({ content }) => {
  return (
    content.status && (
      <NotificationContainer>
        {content.type !== "FAIL" ? (
          <Notification>
            <div className="notification__content">
              {content.type === "SUCCESS" ? (
                <AiFillCheckCircle className="icon-success" />
              ) : (
                <GiHand className="icon-success" />
              )}
              <h5>{content.message}</h5>
            </div>
            <div className="n-load n-success"></div>
          </Notification>
        ) : (
          <Notification>
            <div className="notification__content">
              <RiErrorWarningFill className="icon-negative" />
              <h5>{content.message}</h5>
            </div>
            <div className="n-load n-negative"></div>
          </Notification>
        )}
      </NotificationContainer>
    )
  );
};

export default NotificationBox;
