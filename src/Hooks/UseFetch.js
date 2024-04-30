// import { useEffect, useState } from "react";

// export default function UseFetch(url) {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setData(data));
//     }, [url]);
//     return data;
// }

//async await으로 바꿔봄..
// import { useEffect, useState } from "react";

// export default function UseFetch(url) {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetchData(url);
//     }, [url]);
//     async function fetchData(url) {
//         try {
//             const res = await fetch(url);
//             const data = await res.json();
//             setData(data);
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     return data;
// }

//error처리와 응답했을때 추가
import { useEffect, useState } from "react";

export default function UseFetch(url) {
    const [data, setData] = useState();
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return data;
            })
            .then(data => setData(data))
            .catch(error => {
                console.error("Error: ", error);
            });
    }, [data, url]);
}
