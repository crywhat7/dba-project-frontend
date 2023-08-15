import { Toaster, toast } from 'sonner';

export const GlobalToaster = Toaster;

export const showRegularToast = (message: string) => {
  return toast(message);
};

export const showSuccessToast = (message: string) => {
  return toast.success(message);
};

export const showErrorToast = (message: string) => {
  return toast.error(message);
};
