import { Button, TextField, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/taskSlice";

const TaskManager = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleTask = () => {
    console.log(task);
    if (!task.trim()) return;
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Task Manager
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          label="Add Task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <Button variant="outlined" onClick={handleTask} disabled={!task}>
          Add
        </Button>
      </Box>
    </>
  );
};

export default TaskManager;
