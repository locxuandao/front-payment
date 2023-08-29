import { Helmet } from "react-helmet-async";
import { ChatWrapper } from "app/containers/ChatWrapper";

export const ChatPage = () => {
  return (
    <>
      <Helmet>
        <title>Spayment | ChatRoom</title>
      </Helmet>
      <ChatWrapper />
    </>
  );
};
