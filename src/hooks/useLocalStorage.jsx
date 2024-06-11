import { useEffect, useState } from "react";
function useLocalStorage(key, initialValue) {
    console.log('in useLocalStorage hook', key);
    const [data, setData] = useState(localStorage.getItem(key));
    console.log("data", data);
    console.log("localStorage", localStorage);

    useEffect(function getDataFromStorage() {
        if (!data) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, data);
        }
    }, [data]);

    return [data, setData];
}

export default useLocalStorage;