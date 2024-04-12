import { useEffect, useState } from "react";

// function useLocalStorage(key) {
//     console.log('in useLocalStorage hook');
//     const [data, setData] = useState(localStorage.getItem(key));

//     function updateData(newData) {
//         if (!newData) {
//             setData(null);
//             localStorage.removeItem(key);
//         } else {
//             setData(newData);
//             localStorage.setItem(key, newData);
//         }
//     }

//     return [data, updateData];
// }

function useLocalStorage(key) {
    console.log('in useLocalStorage hook');
    const [data, setData] = useState(localStorage.getItem(key));

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