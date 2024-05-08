import styled from "@emotion/styled";
import { Box, Button, InputBase, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 20px 0;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    opacity: 0.4;
    width: 300px;
    padding-right: 25px;
  }
  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
  }
  & > span {
    font-size: 12px;
    position: relative;
    right: 40px;
  }
`;

const CreateNote = ({ getData }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [color, setColor] = useState("");

  const [error, setError] = useState("");

  const data = {
    title,
    details,
    color,
  };

  const onCreateNote = async () => {
    if (title !== "" && details !== "") {
      const response = await axios.post("http://localhost:8000/addnote", data);
      alert(response.data.message);
      getData();
    } else {
      setError("Please enter title and details");
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  return (
    <Container>
      <InputBase
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        name="title"
      />
      <Box component="span">{title.length}/30</Box>
      <InputBase
        placeholder="Details"
        onChange={(e) => setDetails(e.target.value)}
        name="details"
      />
      <Box component="span">{details.length}/50</Box>
      <InputBase
        type="color"
        defaultValue={"#f5f5f5"}
        placeholder="Choose color"
        onChange={(e) => setColor(e.target.value)}
        name="color"
      />
      <Button variant="outlined" onClick={() => onCreateNote()}>
        Create
      </Button>
      {error && <Typography style={{ color: "red" }}>{error}</Typography>}
    </Container>
  );
};

export default CreateNote;
