import type { FC } from "react";
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    nav: {},
    list: {
        listStyle: "none",
        padding: "0",
        margin: 0,
        backgroundColor: "green",
        display: "flex"
    },
    item: {
        display: "flex"
    },
    link: {
        fontSize: "20px",
        lineHeight: "25px",
        fontFamily: "Gilroy",
        fontStyle: "italic",
        padding: "7px 10px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "darkgreen",
        }
    },

    tools: {
        backgroundColor: "grey",
        height: "90px"
    }
});

const Navigation: FC = () => {
    const classes = useStyles()

    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes.item}><a className={classes.link}>Главная</a></li>
            </ul>

            <div className={classes.tools}>
            </div>
        </nav>
    )
}

export default Navigation