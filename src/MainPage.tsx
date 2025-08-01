import { FC } from "react";
import { createUseStyles } from "react-jss";
import Navigation from "./navigation/Navigation";


const useStyles = createUseStyles({
    main: {},
});

const MainPage: FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <Navigation/>
        </div>
    )
}

export default MainPage