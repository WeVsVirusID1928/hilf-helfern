import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

export default () => {
  const useStyles = makeStyles({
    offset: theme.mixins.toolbar,
    background: {
      backgroundColor: "#171717"
    },
    landingPaper: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 30,
      paddingRight: 30,
      marginBottom: 30,
      [`@media (max-width: 600px)`]: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 10,
        marginBottom: 20,
        marginLeft: 0,
        marginRigh: 0
      }
    },
    landingHeader: {
      paddingTop: 10,
      paddingBottom: 20
    },
    landingText: {
      paddingTop: 5,
      paddingBottom: 5
    },
    landingButtonGrid: {
      textAlign: "center",
      padding: 20
    },
    landingButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.5
      }
    },
    landingSupporterImage: {
      maxWidth: 200
    },
    registrationGrid: {
      textAlign: "center"
    },
    registrationExperience: {
      textAlign: "left"
    },
    registrationPaper: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 20
    },
    registrationHeader: {
      paddingTop: 10,
      paddingBottom: 20,
      fontWeight: 500
    },
    registrationTextfield: {
      color: theme.palette.text.primary,
      marginTop: 5,
      marginBottom: 5,
      width: "100%",
      textAlign: "left"
    },
    registrationTaskText: {
      marginTop: 20,
      paddingBottom: 20,
      fontSize: "1.8rem",
      [`@media (max-width: 600px)`]: {
        fontSize: "1.3rem"
      }
    },
    registrationButton: {
      backgroundColor: theme.palette.secondary.main,
      marginTop: 20,
      color: theme.palette.common.white,
      width: "100%",
      maxWidth: 600,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.5
      }
    },
    registrationDivider: {
      backgroundColor: theme.palette.secondary.main
    },
    confirmationFacebook: {
      backgroundColor: "#4267b2",
      width: 120,
      paddingLeft: 10,
      borderRadius: 8,
      height: 25
    },
    confirmationTwitter: {
      backgroundColor: "#55acee",
      width: 120,
      paddingLeft: 10,
      borderRadius: 8,
      height: 25
    },
    confirmationWhatsapp: {
      backgroundColor: "#25D366",
      width: 120,
      paddingLeft: 10,
      borderRadius: 8,
      height: 30
    },
    confirmationInstagram: {
      backgroundColor: "#e4405f",
      width: 120,
      paddingLeft: 10,
      borderRadius: 8,
      height: 30
    },
    confirmationLink: {
      textDecoration: "none !important",
      color: theme.palette.common.white
    },
    confirmationReferralLabel: {
      paddingLeft: 10,
      verticalAlign: "middle"
    }
  });
  return useStyles();
};