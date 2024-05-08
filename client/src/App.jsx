import "./App.css";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import { Box } from "@mui/material";
import Notes from "./components/Notes";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getnotes");
      setData(response.data);
      console.log("get", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote getData={getData} />
        <Notes notes={data} getData={getData} />
      </Box>
    </>
  );
}

export default App;
