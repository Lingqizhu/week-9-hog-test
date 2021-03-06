import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfiles } from "../actions/profilesActions";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Container } from "react-bootstrap";

export default function PieChart() {
  const dispatch = useDispatch();
  const profilesList = useSelector((state) => state.profilesList);
  const { profiles } = profilesList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userLogin);
  console.log(userInfo);
  console.log(profilesList);
  console.log(profiles);
  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch, userInfo]);

  const participantNum = profiles.length;
  console.log(participantNum);
  const availableParticipantNum = profiles.filter(
    (profile) => profile.available === true
  ).length;
  console.log(availableParticipantNum);
  const unavailableParticipantNum = participantNum - availableParticipantNum;
  console.log(unavailableParticipantNum);
  const hiredParticipantNum = profiles.filter(
    (profile) => profile.hired === true
  ).length;
  console.log(hiredParticipantNum);
  const unhiredParticipantNum = participantNum - hiredParticipantNum;
  console.log(unhiredParticipantNum);

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data1 = {
    labels: ["availableParticipants"],
    datasets: [
      {
        label: "available",
        data: [availableParticipantNum, unavailableParticipantNum],
        backgroundColor: ["#2a71d0", "#ecf0f1"],
      },
    ],
  };

  const data2 = {
    labels: ["hiredParticipants"],
    datasets: [
      {
        label: "hired",
        data: [hiredParticipantNum, unhiredParticipantNum],
        backgroundColor: ["#f3ba2f", "#ecf0f1"],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "white",
      },
    },
  };
  return (
    <Container>
      <div style={{ width: 600, display: "flex", padding:"20px"}}>
        <p>Available Participant</p>
        <Pie data={data1} options={options} />
        <p>Hired Participant</p>
        <Pie data={data2} options={options} />
      </div>
    </Container>
  );
}
