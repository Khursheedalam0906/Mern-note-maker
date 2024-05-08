import { Box, Typography } from "@mui/material";
import Note from "./Note";
import styled from "@emotion/styled";

const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;

const Notes = ({ notes, getData }) => {
  return (
    <Box>
      <Typography variant="h5">Notes</Typography>
      <Container>
        {notes?.map((note, index) => (
          <Box key={index}>
            <Note note={note} getData={getData} />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Notes;
