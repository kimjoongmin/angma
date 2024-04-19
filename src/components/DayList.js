// import React from "react";
// import dummy from "../db/data.json";
// import { Link } from "react-router-dom";

// export default function DayList() {
//     // console.log(dummy);
//     return (
//         <ul className="list_day">
//             {dummy.days.map(day => (
//                 <li key={day.id}>
//                     <Link to={`/day/${day.day}`}>Day {day.day}</Link>
//                 </li>
//             ))}
//         </ul>
//     );
// }
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function DayList() {
//     const [days, setDays] = useState([]);
//     useEffect(() => {
//         fetch("http://localhost:3001/days")
//             .then(res => res.json())
//             .then(data => setDays(data));
//     }, []);
//     return (
//         <div>
//             <ul className="list_day">
//                 {days.map(day => (
//                     <li key={day.id}>
//                         <Link to={`/day/${day.day}`}>Day {day.day}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function DayList() {
//     const [days, setDays] = useState([]);
//     useEffect(() => {
//         fetch("http://localhost:3001/days")
//             .then(res => res.json())
//             .then(data => setDays(data));
//     }, []);
//     return (
//         <>
//             <ul className="list_day">
//                 {days.map(day => (
//                     <li key={day.id}>
//                         <Link to={`/day/${day.day}`}>Day {day.day}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

import { Link } from "react-router-dom";
import UseFetch from "../Hooks/UseFetch";

export default function DayList() {
    //UseFetch
    const days = UseFetch("http://localhost:3001/days");
    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
