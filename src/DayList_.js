// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseFetch from "./Hooks/UseFetch";

export default function DayList_() {
    // const [days, setDays] = useState();
    // useEffect(() => {
    //     fetch("http://localhost:3001/days")
    //         .then(res => res.json())
    //         .then(data => setDays(data));
    // }, []);
    const days = UseFetch("http://localhost:3001/days");
    return (
        <ul className="list_day">
            {days.map(item => (
                <li key={item.id}>
                    <Link to={`/day/${item.day}`}>Day {item.day}</Link>
                </li>
            ))}
        </ul>
    );
}
