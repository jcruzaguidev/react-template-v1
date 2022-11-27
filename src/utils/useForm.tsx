import { ChangeEvent, useState } from "react";

export const useForm = <T extends Partial<T>>(initState: T) => {
   const [formData, setFormData] = useState(initState);
   const [reload, setReload] = useState(0);

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
      setReload((prev) => prev + 1);
   };

   const resetForm = () => {
      setFormData({ ...initState });
   };

   const isValidEmail = (email: string) => {
      const re =
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
   };

   return {
      ...formData,
      formData,
      setFormData,
      isValidEmail,
      onChange,
      resetForm,
      reload,
   };
};
