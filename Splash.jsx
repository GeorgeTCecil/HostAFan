/** @format */

import React, { Fragment } from "react";
import {
  Grid,
  Container,
  IconButton,
  Card,
  Button,
  Tooltip,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HostaFanLogo from "@assets/images/hostafan/HostaFanLogoNoText1.png";
import png1 from "@assets/images/splash/1.png";
import png2 from "@assets/images/splash/2.png";
import png3 from "@assets/images/splash/3.png";
import png5 from "@assets/images/splash/5.png";
import png9 from "@assets/images/splash/9.png";
import png10 from "@assets/images/splash/10.png";
import testImage1 from "@assets/images/splash-test-images/test-1.jpg";
import testImage3 from "@assets/images/splash-test-images/test-3.jpg";
import testImage8 from "@assets/images/splash-test-images/test-8.jpg";
import SplashHeader from "../components/splash/SplashHeader";
import PopularEvents from "../components/splash/PopularEvents";
import Footer from "../layout-components/Footer";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgb(255, 255, 255)",
    },
  },
}));

const LandingPage = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const redirectToRegistration = () => {
    history.push("/register");
  };

  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-white">
        <SplashHeader {...props} />
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-8"
            style={{ backgroundImage: "url(" + testImage3 + ")" }}
          />
          <div className="bg-composed-wrapper--content">
            <Container>
              <Container>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  direction="column"
                  style={{ marginBottom: 30 }}
                >
                  <Grid item>
                    <img className="align-items-center" src={HostaFanLogo} />
                  </Grid>

                  <Grid item>
                    <div className="text-white font-weight-bold font-size-xxl">
                      Celebrate Together!
                    </div>
                  </Grid>
                </Grid>
                <PopularEvents {...props} />
              </Container>
            </Container>
          </div>
        </div>

        <span className="d-none d-lg-block"></span>

        <div className="hero-footer py-3 bg-white">
          <Grid
            container
            spacing={4}
            className="bg-white"
            direction="row"
            justify="space-evenly"
            alignItems="center"
          ></Grid>
        </div>
      </div>
      <div className="hero-footer bg-white py-3 py-lg-4" />
      <div className="py-4 bg-secondary bg-white">
        <Grid
          container
          spacing={4}
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            lg={6}
            className="d-flex align-items-center bg-white"
          >
            <Card className="card-box flex-fill mb-4 mb-xl-0 bg-white">
              <a className="card-img-wrapper rounded">
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={png1}
                ></img>
              </a>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6} className="bg-white">
            <div
              className="text-center py-4 bg-white"
              style={{ padding: "10px" }}
            >
              <h3 className="display-3 mb-2 font-weight-bold">
                Host an Event!
              </h3>
              <p className="text-left font-size-xl mb-5 text-black-50">
                Whether you want to host a gathering to celebrate your team`s
                latest win, or a viewing party for the final episode of the
                season. There is always a time and a place at Host a Fan.
              </p>
            </div>
          </Grid>
        </Grid>
        <div className="hero-footer py-3 py-lg-4" />

        <Grid
          container
          style={{ paddingTop: 60, paddingBottom: 50 }}
          className="bg-night-fade "
          spacing={4}
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Grid item xs={12} lg={6}>
            <div className="text-center py-4">
              <h3 className="display-3 mb-2 font-weight-bold">
                Host services with your Event
              </h3>
              <p className="text-center font-size-xl mb-5 text-white">
                Already heading to the game? Coordinate a pick up and drop off!
              </p>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            className="d-flex align-items-center"
            style={{ paddingLeft: 10 }}
          >
            <Card
              className="card-box flex-fill mb-4 mb-xl-0 "
              style={{ marginLeft: 10 }}
            >
              <a className="card-img-wrapper rounded">
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={png2}
                ></img>
              </a>
            </Card>
          </Grid>
        </Grid>

        <div className="hero-footer py-3 py-lg-3" />
        <div className="hero-footer py-3 py-lg-5" />

        <Grid container spacing={4}></Grid>
      </div>

      <Grid
        container
        spacing={0}
        direction="row"
        justify="center"
        alignItems="center"
        className="p-0 bg-white"
      >
        <Grid item lg={3}>
          <div className="p-0 p-lg-5">
            <a href="#/" className="card-img-wrapper rounded">
              <img alt="..." className="card-img-top rounded" src={png5} />
            </a>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="p-0 p-lg-5">
            <a href="#/" className="card-img-wrapper rounded">
              <img alt="..." className="card-img-top rounded" src={png9} />
            </a>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="p-0 p-lg-5">
            <a href="#/" className="card-img-wrapper rounded">
              <img alt="..." className="card-img-top rounded" src={png3} />
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="center"
        alignItems="center"
        className="p-0 bg-white"
      >
        <Grid item xs={3}>
          <div className="p-0 p-lg-5">
            <a href="#/" className="card-img-wrapper rounded">
              <img alt="..." className="card-img-top rounded" src={png10} />
            </a>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="p-0 p-lg-5">
            <a href="#/" className="card-img-wrapper rounded">
              <img
                alt="..."
                className="card-img-top rounded"
                src={testImage1}
              />
            </a>
          </div>
        </Grid>
        <Grid item lg={3}>
          <div className="p-0 p-lg-5">
            <a href="#/" className="card-img-wrapper rounded">
              <img
                alt="..."
                className="card-img-top rounded"
                src={testImage8}
              />
            </a>
          </div>
        </Grid>
      </Grid>

      <Grid container justify="center" className="bg-white">
        <div className="py-4 bg-white">
          <div className="text-center py-4">
            <h3 className="display-3 mb-2 font-weight-bold">
              Celebrate Together
            </h3>
            <p className="font-size-lg mb-4 text-black-50">
              Here is the place to find people to celebrate with! Become a Host
              today!
            </p>
            <Button
              className="bg-amy-crisp text-white"
              color="primary"
              variant="contained"
              onClick={redirectToRegistration}
            >
              Become a Host Today!
            </Button>
          </div>
        </div>
      </Grid>
      <div className="hero-footer py-3  bg-night-fade py-lg-5" />
      <Grid container className="p-0 bg-white"></Grid>
      <div className="bg-night-sky">
        <div>
          <Container maxWidth="md" className="text-center">
            <div className="hero-footer py-3 py-lg-5" />
            <h1 className="display-3 mb-4 text-white font-weight-bold">
              Stay up to date
            </h1>
            <p className="font-size-lg text-white-50">
              Follow Host a Fan on any of our social media accounts and checkout
              out the latest blogs! And don`t forget to sign up for our
              newsletter!
            </p>
            <TextField
              className={classes.root}
              style={{ marginRight: 10 }}
              type="text"
              label="Enter Email"
              variant="filled"
            />
            <Button
              className="bg-strong-bliss text-white mt-2"
              color="primary"
              variant="contained"
            >
              Subscribe
            </Button>
          </Container>
          <div className="divider border-2 d-sm-none d-md-block rounded-circle border-white bg-white opacity-1 mx-auto mb-4 mt-5 w-50" />

          <div className="d-flex justify-content-center">
            <Tooltip arrow title="Facebook">
              <IconButton
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;www.facebook.com&#x2F;UiFort"
                rel="noopener nofollow"
                target="_blank"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className="font-size-xxl"
                  />
                </span>
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Twitter">
              <IconButton
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;twitter.com&#x2F;uifort1"
                rel="noopener nofollow"
                target="_blank"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="font-size-xxl"
                  />
                </span>
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Instagram">
              <IconButton
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;www.instagram.com&#x2F;uifort1"
                rel="noopener nofollow"
                target="_blank"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="font-size-xxl"
                  />
                </span>
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Blogs">
              <IconButton
                className="nav-link text-white-50"
                href="/blogs"
                rel="noopener nofollow"
                target="_blank"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={["fas", "blog"]}
                    className="font-size-xxl"
                  />
                </span>
              </IconButton>
            </Tooltip>
            <div className="hero-footer py-3 py-lg-5" />
          </div>

          <Footer></Footer>
        </div>
      </div>
    </Fragment>
  );
};

LandingPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default LandingPage;
