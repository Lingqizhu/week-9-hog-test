import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom'
import { BsTrashFill } from "react-icons/bs";

function Permissions(props) {
const navigate = useNavigate();

console.log("current role", props.user.role)

const deleteData = (id) => {
    props.client.deleteUsers(id).then(() => props.refreshList());
};

const filterProfile = (data) => {
    let theProfile = props.users.filter((current) =>
    current.email
      .toLowerCase()
      .includes(data)
  )
    props.cProfile(theProfile[0])
    navigate("/profile")
  }

function detRole(){
    if(props.user.role === "tda") {
        return (
            <div className="ad-footer-tda">
                <div className="right">
                    <strong>Admin Tools: </strong>&nbsp;&nbsp;
                    <Button size="sm" variant="warning" onClick={()=>filterProfile(props.current.email)}>
                        {" "}
                        Edit Profile
                    </Button>
                    &nbsp;
                    <Button variant="danger" size="sm" onClick={() => deleteData(props.current._id)}>
                        {" "}
                        <BsTrashFill />
                    </Button>
                </div>
            </div>
        )
    } else if(props.user.role === "employer") {
        return (
            <div className="ad-footer-emp">
                <div className="right">
                    <strong>Employer Options: </strong>&nbsp;&nbsp;
                    <Button size="sm" variant="secondary">
                        {" "}
                        Contact
                    </Button>
                    &nbsp;
                    <a href={props.current.portfolio} target="_new">
                    <Button size="sm" variant="success" ><a href={props.current.portfolio}>Portfolio</a></Button>
                    </a>
                    &nbsp;
                    <a href={props.current.cv} target="_new">
                    <Button size="sm" variant="success"><a href={props.current.cv}>Download CV</a></Button>
                    </a>
                </div>
            </div>
        )
    } else {
        return;
    };
}

    return (
        <>
        {detRole()}
        </>
    )

}

export default Permissions;