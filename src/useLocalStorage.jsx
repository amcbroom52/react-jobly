import { set } from "lodash";
import { useEffect, useState } from "react";

function useLocalStorage(key) {
    console.log('in useLocalStorage hook')
    const [data, setData] = useState(null);

    useEffect(function getDataFromStorage() {
        setData(localStorage.getItem(key));
    }, []);

    function updateData(newData) {
        if (!newData) {
            localStorage.removeItem(key);
            setData(null);
        } else {
            localStorage.setItem(key, newData);
            setData(newData);
        }
    }

    return [data, updateData];
}

export default useLocalStorage;