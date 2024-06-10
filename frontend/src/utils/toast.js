import { toast } from "react-toastify";

const config = {
  position: "bottom-center",
  autoClose: 3000,
  theme: "dark",
};

export const defaultToast = (msg) => toast(msg, config);
export const successToast = (msg) => toast.success(msg, config);
export const warningToast = (msg) => toast.warn(msg, config);
export const errorToast = (msg) => toast.error(msg, config);
export const infoToast = (msg) => toast.info(msg, config);
