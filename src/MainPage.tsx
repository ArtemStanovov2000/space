import type { FC } from "react";
import { createUseStyles } from "react-jss";
import Navigation from "./navigation/Navigation";
import Window from "./window/Window";


const useStyles = createUseStyles({
    main: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
    },
});

const MainPage: FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <Navigation />
            <Window />
        </div>
    )
}

export default MainPage