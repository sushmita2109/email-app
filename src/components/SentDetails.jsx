import { useParams } from "react-router-dom";

export const SentDetails = () => {
  const { sentId } = useParams();

  return (
    <div>
      <h1>Sent Details {sentId}</h1>
    </div>
  );
};
