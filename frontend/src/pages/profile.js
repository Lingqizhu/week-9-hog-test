import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Accordion, Button, Badge } from "react-bootstrap";
import {deleteProfile } from '../actions/profilesActions';


export default function Profile({ profile, setCurrentId }){
  const dispatch = useDispatch();
  return(
    <Card style={{ margin: 10 }}>
    <Card.Header style={{ display: "flex" }}>
      <span
        style={{
          color: "white",
          textDecoration: "none",
          flex: 1,
          cursor: "pointer",
          alignSelf: "center",
          fontSize: 18,
        }}
      >
        <Accordion.Header>
          <img src={profile.picture}/>
          {profile.fname}{profile.sname}
          <br/>
          <br/>
          {profile.location}
        </Accordion.Header>
      </span>
      <div>
        <Button
          variant="success" href={`/profile/${profile._id}`}
        >
          Edit
        </Button>
        <Button /* onClick={() => deleteHandler(profile._id)} */ >
          Delete
        </Button>
      </div>
    </Card.Header>
    <Accordion.Body>
      <Card.Body>
        <Badge varian="success">{profile.avaiable}</Badge>
        <blockquote className="blockquote mb-0">

          <p>Skills: {profile.skills}</p>
          <p> {profile.bio}</p>
          <br />
          <footer className="blockquote-footer">
           Update date:
            <cite title="Source Title">{profile.updatedAt.substring(0,10)}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Accordion.Body>
  </Card>
  )
}