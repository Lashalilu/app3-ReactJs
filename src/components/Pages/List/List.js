import './List.css';
import {useEffect, useState} from "react";
import axios from "axios";

export default function () {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/user").then((response) => {
            setData(response.data.data)
        })
    }, [])

    return (
        <div className="start-phone">
            <div className="texts">
                <div className="user-data-table">User Data Table</div>
                <div className="table-info">
                    <div className="header-table">
                        <div scope="col" className="header-info name-1">Name</div>
                        <div scope="col" className="header-info country-1">Country</div>
                        <div scope="col" className="header-info date-of-birth-1">Date Of Birth</div>
                    </div>
                    <div className="body-table">

                        {data.map((user) => (
                            <>
                                <div className="body-info">
                                    <div className="name-info"><span>{user.name}</span></div>
                                    <div className="country-info"><span>{user.country}</span></div>
                                    <div className="date-info"><span>{user.birthdate}</span></div>
                                </div>
                            </>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
};

