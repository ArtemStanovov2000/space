import { createUseStyles } from "react-jss";
import type { FC } from "react";
import Canvas from "../canvas/Canvas";

const useStyles = createUseStyles({
    window: {
        flex: 1,
        backgroundColor: "darkgrey",
        display: "flex",
        minHeight: 0, 
    },
});

const Window: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.window}>
            <Canvas/>
        </div>
    );
};

export default Window;