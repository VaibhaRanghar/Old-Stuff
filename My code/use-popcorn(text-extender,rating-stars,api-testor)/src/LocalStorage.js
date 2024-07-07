import { useEffect, useState } from "react";

export function useLocalStorageState(initialState,key){
    const [result, setResult] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState
      });

      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(result));
      }, [result,key]);
    
      return[result, setResult]
}