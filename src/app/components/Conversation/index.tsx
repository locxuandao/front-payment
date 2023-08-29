import classNames from "classnames/bind";
import { Typography, Avatar } from "@mui/material";

import styles from "./Conversation.module.scss";
import { useGetUserById } from "queries/user";
import { getTokens } from "utils/storage";

const cx = classNames.bind(styles);

interface Props {
  className?: string;
  conversation: any;
}

export const Conversation = (props: Props) => {
  const { className, conversation } = props;
  const { userInfo } = getTokens();

  const friendId = conversation?.members.find((m: any) => m !== userInfo.id);

  const { data: friend } = useGetUserById(friendId);

  return (
    <div className={cx("container", className)}>
      <div className={cx("info")}>
        <Avatar className={cx("avatar")} />
        <Typography component="p">{friend?.username}</Typography>
      </div>
    </div>
  );
};
