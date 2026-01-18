import {
    Box,
    Card,
    Typography,
    Button,
    Chip,
    Stack,
} from "@mui/material";
import FilterTask from "./FilterTask";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../Redux/taskSlice";

const TaskList = () => {
    const filteredTasks = useSelector((state: any) => {
  if (state.tasks.filters === "completed") {
    return state.tasks.items.filter(
      (task: any) => task.completed === true
    );
  }

  return state.tasks.items; // all
});

    const dispatch = useDispatch()
    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#eef2f6",
                p: 4,
            }}
        >
            <Typography variant="h4" fontWeight="bold" mb={3}>
                My Tasks
            </Typography>

           <FilterTask />

            {filteredTasks.length === 0 ? (
                <Typography align="center" color="text.secondary" mt={6}>
                    🎉 No tasks to show
                </Typography>
            ) : (
                <Stack spacing={2}>
                    {filteredTasks.map((item: any) => (
                        <Card
                            key={item.id}
                            sx={{
                                p: 2,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderLeft: "6px solid",
                                borderColor: item.completed ? "success.main" : "warning.main",
                                transition: "0.2s",
                                "&:hover": {
                                    transform: "scale(1.01)",
                                },
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        textDecoration: item.completed
                                            ? "line-through"
                                            : "none",
                                    }}
                                >
                                    {item.data}
                                </Typography>

                                <Chip
                                    size="small"
                                    label={item.completed ? "Completed" : "Pending"}
                                    color={item.completed ? "success" : "warning"}
                                    sx={{ mt: 1 }}
                                />
                            </Box>

                            <Box>
                                <Button
                                    variant="contained"
                                    color={item.completed ? "success" : "warning"}
                                    size="small"
                                    onClick={() => dispatch(toggleTask(item.id))}
                                >
                                    {item.completed ? "Undo" : "Done"}
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    size="small"
                                    onClick={() => dispatch(deleteTask(item.id))}
                                >
                                    Delete
                                </Button>
                            </Box>
                        </Card>
                    ))}
                </Stack>
            )}
        </Box>
    );
};

export default TaskList;
