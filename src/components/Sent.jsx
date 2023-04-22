import { useEmail } from "../context/EmailContext";
import { Landing } from "./Landing";
import { Link } from "react-router-dom";

export const Sent = () => {
  const { sents } = useEmail();
  return (
    <div>
      <Landing />
      <h1>Sent</h1>
      {sents.map((sent) => (
        <li key={sent.id}>
          <Link to={`/sent/${sent.id}`}>{sent.message}</Link>
        </li>
      ))}
    </div>
  );
};
