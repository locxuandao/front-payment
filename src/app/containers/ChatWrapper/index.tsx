import classNames from "classnames/bind";
import { Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useState, useRef } from "react";
import { io } from "socket.io-client";

import { Conversation } from "app/components/Conversation";
import logoImg from "assets/images/logo.png";
import { SearchInput } from "app/components/SearchInput";
import { Messeage } from "app/components/Messeage";
import { useGetConversationByOwner } from "queries/conversation";
import { useGetMesseageByConversationById } from "queries/messeage";
import { useCreateMesseage } from "mutations/messeage";
import { ConversationModel } from "types/Conversation";
import { getTokens } from "utils/storage";
import { useGetConversationById } from "queries/conversation";

import styles from "./ChatWrapper.module.scss";
import { enqueueSnackbar } from "notistack";

const cx = classNames.bind(styles);

export const ChatWrapper = () => {
  const [currentChat, setCurrentChat] = useState<ConversationModel>();
  const [messeage, setMesseage] = useState<any>();
  const [newMesseage, setNewMesseage] = useState("");
  const [arrivalMesseage, setArrivalMesseage] = useState<any>(null);

  const { data: conversations } = useGetConversationByOwner();
  const { data: messeages } = useGetMesseageByConversationById(
    String(currentChat?._id),
  );
  const { data: conversationById } = useGetConversationById(
    String(currentChat?._id),
  );

  const { mutateAsync } = useCreateMesseage();

  const { userInfo } = getTokens();
  const navigate = useNavigate();
  const socket = useRef<any>();

  useEffect(() => {
    setMesseage(messeages);
  }, [messeages]);

  const handleNavigateHome = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  const handleSubmitMesseage = useCallback(() => {
    (async () => {
      try {
        await mutateAsync({
          conversationId: currentChat?._id,
          sender: userInfo.id,
          text: newMesseage,
        });
        const receiverId = currentChat?.members.find(
          member => member !== userInfo.id,
        );
        socket.current.emit("sendMessage", {
          senderId: userInfo.id,
          receiverId,
          text: newMesseage,
        });
      } catch (error) {
        enqueueSnackbar("không gửi được tin nhắn", {
          variant: "warning",
        });
      }
    })();
    setNewMesseage("");
  }, [newMesseage, currentChat?._id]);

  useEffect(() => {
    socket.current = io("ws://localhost:8081");
    socket.current.on("getMessage", (data: any) => {
      setArrivalMesseage({
        sender: data.senderId,
        text: data.text,
        create_at: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    arrivalMesseage &&
      currentChat?.members.includes(arrivalMesseage.sender) &&
      setMesseage((prev: any) => [...prev, arrivalMesseage]);
  }, [arrivalMesseage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", userInfo.id);
    socket.current.on("getUsers", (users: any) => {
      console.log(users);
    });
  }, [userInfo]);

  return (
    <div className={cx("container")}>
      <div className={cx("sideBar")}>
        <div className={cx("header")}>
          <div className={cx("heading")}>
            <img
              src={logoImg}
              alt="logo"
              className={cx("logoImg")}
              onClick={handleNavigateHome}
            />
            <Typography className={cx("title")} onClick={handleNavigateHome}>
              Spayment Connect
            </Typography>
          </div>
          <SearchInput />
        </div>
        <div className={cx("listConversation")}>
          {conversations?.map(con => (
            <div onClick={() => setCurrentChat(con)} key={con?._id}>
              <Conversation key={con?._id} conversation={con} />
            </div>
          ))}
        </div>
      </div>

      <div className={cx("content")}>
        {currentChat ? (
          <div className={cx("chatBoxWrapper")}>
            <div className={cx("leaseDes")}>
              <Typography>{`người mua : ${conversationById?._id}
              `}</Typography>
            </div>
            <div className={cx("chatBoxTop")}>
              {messeage?.map((mess: any) => (
                <Messeage
                  key={mess?._id}
                  messeage={mess}
                  own={mess?.sender === userInfo.id}
                />
              ))}
            </div>
            <div className={cx("chatBoxBottom")}>
              <input
                placeholder="Nhập tin nhắn"
                className={cx("inputMesseage")}
                onChange={e => setNewMesseage(e.target.value)}
                value={newMesseage}
              />
              <Send onClick={handleSubmitMesseage} className={cx("sendBtn")} />
            </div>
          </div>
        ) : (
          <Typography className={cx("noConversation")}>
            Mở 1 đoạn hội thoại để bắt đầu chat
          </Typography>
        )}
      </div>
    </div>
  );
};
