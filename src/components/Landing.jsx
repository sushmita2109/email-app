import { NavLink } from "react-router-dom";
export const Landing = () => {
  return (
    <div>
      <h1>My Mail Box</h1>
      <NavLink to="/inbox">Inbox</NavLink>||
      <NavLink to="/sent">Sent</NavLink>
    </div>
  );
};
