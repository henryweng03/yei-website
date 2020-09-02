import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLinks: {
    color: "white",
    fontSize: "1.2em",
    marginLeft: "0.42em",
    "&::before": {
      transition: "0.42s ease-in-out",
      backgroundColor: `${theme.palette.primary.dark}`,
      content: '""',
      zIndex: -10,
      display: "block",
      bottom: "0",
      position: "absolute",
      height: "9%",
      width: "0",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
    },
    "&:hover": {
      backgroundColor: "inherit",
      "&::before": {
        width: "100%",
      },
    },
    "&> span.MuiTouchRipple-root": {
      display: "none",
    },
    "&.active": {
      fontWeight: "bold",
      "&::before": {
        width: "100%",
      },
    },
  },
  list: {
    width: 250,
    alignText: "center",
  },
  listItem: {
    color: "black",
  },
  backToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default useStyles;
