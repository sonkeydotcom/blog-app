import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [comment, setComment] = useState([
    {
      id: 1,
      text: "This is a great post! I really enjoyed reading it.",
      author: "John Doe",
    },
    {
      id: 2,
      text: "I agree with John, this post is very insightful.",
      author: "Jane Doe",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    name: "Farmy App",
    email: "john@example.com",
    password: "password123",
  });

  return (
    <GlobalContext.Provider
      value={{
        comment,
        setComment,
        isLoading,
        setIsLoading,
        user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
