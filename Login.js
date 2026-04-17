import { useState, useContext } from "react";
import { AutContext, AuthContext } from "../context/AuthContext";

function Login() {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const stored = JSON.parse(localStorage.getItem("userData"));
        if(
            stored.username === form.username &&
            stored.username === form.password
        ) {
            login(form);
        }  else {
            alert("Inavalid Creadentials");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <input
            type="password"
            name="password"
            onChange={handleChange}
            />
            <button type="submit">Login</button>
            </form>
    );



    }
    export default Login
