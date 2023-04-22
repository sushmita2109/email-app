import { useParams } from "react-router-dom";
import { useEmail } from "../context/EmailContext";

export const EmailDetail = () => {
  const { inboxId } = useParams();
  const { inboxs } = useEmail();

  const itemToDisplay = inboxs.filter((inbox) => inbox.id == inboxId);
  console.log({ itemToDisplay, inboxId, inboxs });
  return (
    <div>
      <h1>Email details </h1>
      {inboxs.map((inbox) => {
        return inbox.id == inboxId ? (
          <div key={inbox.id}>
            <p>
              <strong>Sender: </strong>
              {inbox.sender}
            </p>
            <p>
              <strong>Subject: </strong>
              {inbox.subject}
            </p>
            <p>
              <strong>Message: </strong>
              {inbox.message}
            </p>
          </div>
        ) : null;
      })}
    </div>
  );
};
