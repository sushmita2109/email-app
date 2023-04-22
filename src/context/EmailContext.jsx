import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fakeFetch } from "../Data/fakeFetch";

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [inboxs, setInboxs] = useState([]);
  const [sents, setSents] = useState([]);
  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/allemails");
      if (res.status === 200) {
        setInboxs(res.data.emails);
        setSents(res.data.sentEmails);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleRead = (itemId) => {
    let tempItem = inboxs.filter((inbox) => inbox.id == itemId);
    let replacement = { ...tempItem[0], read: false };
    let newInbox = inboxs.map((inboxItem) =>
      inboxItem.id !== itemId ? inboxItem : replacement
    );
    setInboxs(newInbox);
  };
  return (
    <EmailContext.Provider value={{ inboxs, sents, handleRead }}>
      {children}
    </EmailContext.Provider>
  );
};

EmailProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useEmail = () => useContext(EmailContext);
