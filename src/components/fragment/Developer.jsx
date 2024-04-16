import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/sandesh bhagwat.jpeg";
import {LinkedIn, GitHub, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Sandesh Bhagwat</h3>
                        <p>Web developer</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Science and Engineering Student at Vishwakarma Institute of Technology, Pune.</p>
                    <p>Graduating in 2025 and looking for a responsible position to gain practical knowledge</p>
                    <p>A passionate web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"https://twitter.com/Sandesh_175"}  title={"Sandesh_175"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/sandesh-bhagwat-434039230/"}  title={"sandesh-bhagwat"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://github.com/SandeshBhagwat"}  title={"SandeshBhagwat"}>
                            <GitHub/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;