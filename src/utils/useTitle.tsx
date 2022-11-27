import { useEffect, useRef } from "react";

export interface UseTitleOptions {
   restoreOnUnmount?: boolean;
}

const DEFAULT_USE_TITLE_OPTIONS: UseTitleOptions = {
   restoreOnUnmount: false,
};

function useTitle(
   title: string,
   options: UseTitleOptions = DEFAULT_USE_TITLE_OPTIONS
) {
   const prevTitleRef = useRef(document.title);

   if (document.title !== title) document.title = title;

   useEffect(() => {
      if (options && options.restoreOnUnmount) {
         return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            document.title = prevTitleRef.current;
         };
      } else {
         return;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
}

export default typeof document !== "undefined"
   ? useTitle
   : (_title: string) => {};
