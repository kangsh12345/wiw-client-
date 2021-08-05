import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    "@global": {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      minHeight: "52px",
    },
    toolbar: {},
    toolbarTitle: {
      margin: "auto 20px auto 0",
      fontWeight: '600',
    },
    link: {
      margin: "auto 10px auto auto",
    },

  }));

function NavBar() {
    const classes = useStyles();

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
            >
            <Toolbar className={classes.toolbar}>
                <Link
                justifyContent="flex-start"
                href="/"
                variant="h5"
                color="inherit"
                noWrap
                className={classes.toolbarTitle}
                >
                홈{/* Home(이미지로 추후 대체) */}
                </Link>
                <nav></nav>

                <Button
                href="/login"
                color="black"
                variant="outlined"
                className={classes.link}
                >
                로그인
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
