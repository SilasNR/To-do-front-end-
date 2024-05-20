import React from "react";
import { Link } from "react-router-dom/dist";
import { Button } from 'primereact/button';
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="card col-5 ">
                        
                        <div className="d-flex flex-column ">
                        <h1 className="align-self-center"> TO-DO</h1>
                            <div className="w-full md:w-5 d-flex flex-column align-items-center justify-content-center gap-3 py-5">
                                <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
                                    <label className="w-6rem">Username</label>
                                    <InputText id="username" type="text" className="w-12rem" />
                                </div>
                                <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
                                    <label className="w-6rem">Password</label>
                                    <InputText id="password" type="password" className="w-12rem" />
                                </div>
                                <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                            </div>
                            <div className="w-full md:w-2">
                                <Divider layout="horizontal" className="d-flex md:hidden" align="center">
                                    <b>OR</b>
                                </Divider>
                            </div>
                            <div className="w-full md:w-5 d-flex align-items-center justify-content-center py-5">
                                <Button label="Sign Up" icon="pi pi-user-plus" severity="success" className="w-10rem"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}