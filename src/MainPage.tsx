import { FC } from "react";
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    main: {},
    nav: {
        
    },
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
            textDecoration: "underline"
        }
    }
});

const MainPage: FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <nav className={classes.nav}>
                <ul className={classes.list}>
                    <li className={classes.item}><a className={classes.link}>Главная</a></li>
                    <li className={classes.item}><a className={classes.link}>Вставка</a></li>
                    <li className={classes.item}><a className={classes.link}>Иструменты</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainPage