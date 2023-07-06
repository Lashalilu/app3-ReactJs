import './Index.css';
import Name from "../../Inputs/Text";
import Date from "../../Inputs/Date";
import {useForm} from "react-hook-form";
import Select from "../../Inputs/Select";
import Submit from "../../Buttons/Submit";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function () {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/country").then((response) => {
            console.log(response)
            setData(response.data.data)
        })
    }, [])

    function registerForm(data) {
        axios.post("http://127.0.0.1:8000/api/register", data).then((response) => {
            navigate('/list');
        })
    }

    return (
        <div className="start">
            <div className="start-left">
                <img className="bg-1-icon" alt="" src="/assets/Images/Home/bg1.png"/>
                <div className="start-left-content">
                    <div className="hello-friend">Hello Friend!</div>
                    <div className="enter-your-personal">
                        Enter your personal details and start journey with us!
                    </div>
                </div>
            </div>
            <div className="start-right">
                <div className="start-right-content">
                    <div className="add-a-user">Add a User</div>
                    <div className="type-in-your">Type in your info</div>
                    <form onSubmit={handleSubmit(registerForm)} className="main-form">
                        <div>
                            <Name
                                label="Name"
                                name="name"
                                register={register}
                                type={"text"}
                                classes={"rounded-rectangle-1-copy"}
                                parrentClass={"rounded-rectangle-1-parent"}
                            />
                        </div>
                        <div>
                            <Name
                                label="Email"
                                name="email"
                                register={register}
                                type={"email"}
                                classes={"rounded-rectangle-1-copy"}
                                parrentClass={"rounded-rectangle-2"}
                            />
                        </div>
                        <div>
                            <Name
                                label="Password"
                                name="password"
                                register={register}
                                type={"password"}
                                classes={"rounded-rectangle-1-copy"}
                                parrentClass={"rounded-rectangle-3"}
                            />
                        </div>
                        <div>
                            <Select
                                label="Country"
                                name="country_id"
                                register={register}
                                data={data}
                                classes={"rounded-rectangle-1-copy"}
                                parrentClass={"rounded-rectangle-1-copy-parent"}
                            />
                        </div>
                        <div>
                            <Date
                                label="Date Of Birth"
                                name="birthdate"
                                register={register}
                                type={"date"}
                                classes={"rounded-rectangle-1-copy"}
                                parrentClass={"rounded-rectangle-1-copy-2-parent"}
                            />
                        </div>
                        <div>
                            <Submit
                                parentClasses={"rounded-rectangle-1-copy-3-parent"}
                                title={"Save"}
                                classes={"rounded-rectangle-1-copy-3"}
                                onClick={handleSubmit}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
