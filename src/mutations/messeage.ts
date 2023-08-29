import { useMutation } from "react-query";

import { createMesseage } from "services/messeage";
import { MesseagePayload } from "types/Messeage";

export const useCreateMesseage = () =>
  useMutation((payload: MesseagePayload) => createMesseage(payload));
