import { Box, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../Redux/taskSlice";

const FilterTask = () => {
    const filters = useSelector((state: any) => state.tasks.filters);
    const dispatch = useDispatch()

    return (
        <Box sx={{ display: "flex", gap: 2, marginTop: "5px", alignContent: "center" }}>
            <Button variant="contained"
                color={filters == "all" ? "success" : "primary"}
                onClick={() => dispatch(setFilters("all"))}
            >All</Button>
            <Button variant="contained"
                color={filters == "completed" ? "success" : "primary"}
                onClick={() => dispatch(setFilters("completed"))}

            >Completed</Button>
        </Box>
    )
}

export default FilterTask