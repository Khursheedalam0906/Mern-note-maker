import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";

const StyledCard = styled(Card)`
  width: 400px;
  margin: 20px;
`;

const Wrapper = styled(Box)`
  & > button {
    border: 1px solid #000;
    background: #fff;
    margin-top: 5px;
  }
`;

const Note = ({ note, getData }) => {
  const deleteNote = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/deletenote/${id}`
      );
      alert(response.data.message);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledCard style={{ background: note.color }}>
      <CardContent>
        <Wrapper>
          <Typography variant="h5">{note.title}</Typography>
          <Typography>{note.details}</Typography>
          <Typography>{note.date}</Typography>
          <Button variant="outlined" onClick={() => deleteNote(note._id)}>
            Delete
          </Button>
        </Wrapper>
      </CardContent>
    </StyledCard>
  );
};

export default Note;
