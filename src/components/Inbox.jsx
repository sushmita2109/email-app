import { useEmail } from "../context/EmailContext";
import { Landing } from "./Landing";
import { Link } from "react-router-dom";

export const Inbox = () => {
  const { inboxs, handleRead } = useEmail();
  return (
    <div>
      <Landing />
      <h1>Inbox</h1>
      {inboxs.map((inbox) => (
        <li key={inbox.id}>
          <Link to={`/inbox/${inbox.id}`}>{inbox.message}</Link>
          {inbox.read ? (
            <button onClick={() => handleRead(inbox.id)}>Mark as Read</button>
          ) : null}
        </li>
      ))}
    </div>
  );
};
