import { useParams } from "react-router-dom";
import { useEmail } from "../context/EmailContext";

export const SentDetails = () => {
  const { sentId } = useParams();
  const { sents } = useEmail();

  //   const filteredSent=sents.filter((sent)=>sent.id===sentId)

  return (
    <div>
      <h1>Sent Details </h1>
      {sents.map((sent) => {
        return sent.id == sentId ? (
          <div key={sent.id}>
            <p>{sent.to}</p>
            <p>{sent.subject}</p>
            <p>{sent.message}</p>
          </div>
        ) : null;
      })}
    </div>
  );
};
