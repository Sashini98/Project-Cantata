import React, { Profiler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideNav from "./Components/SideNav";
import * as Content from "./Components/Content";
import * as Bio from "./Components/Bio/index";
import TopNav from "./Components/TopNav";
import EditProfile from "./Components/EditProfile";
/* import Followers from "./Components/Followers"; */
/* import Following from "./Components/Following"; */
import * as Header from "./Components/Header";
import Notification from "./Components/Notification";
import user1 from '../../Assets/Admin/random.jpg';
import "./index.css";
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function UserProfile() {
  const [user, setUser] = useState([])
  const classes = useStyles();

  let { subpath } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3001/profileview").then((response) => {
      setUser(response.data)
    })
  }, [])

  return (
    <div>
      <div class="columns">
        <div class="column is-2">
          <SideNav />
        </div>
        <div class="column is-10">
          <TopNav />
          {subpath === "content" && <Content />}
          {subpath === "bio" && <Bio />}
          {subpath === "EditProfile" && <EditProfile />}
          {/* {subpath === "followers" && <Followers />} */}
          {/*  {subpath === "following" && <Following />} */}
          {subpath === "header" && <Header />}
          {subpath === "Notification" && <Notification />}




          <div class="columns is-gapless is-multiline is-mobile">
            <div class="column is-one-third" align="center">
              <img id="user" src={user1} width="300" height="300" style={{ borderRadius: 1000 / 2, marginTop: "10%", borderColor: 'black', borderWidth: 5 }} />
            </div>
            <div class="column is-one-third">
              <div class="columns is-gapless is-multiline is-mobile">
                <div class="column"><b><a class="name">Person 1</a></b></div>
              </div>
              <div class="columns is-gapless is-multiline is-mobile" id="content">
                <div class="column is-one-third">05</div>
                <div class="column is-one-third">89</div>
                <div class="column is-one-third">66</div>
              </div>
              <div class="columns is-gapless is-multiline is-mobile" id="content">
                <div class="column is-one-third">#Content</div>
                <div class="column is-one-third">#Followers</div>
                <div class="column is-one-third">#Following</div>
              </div>
              <div class="columns is-gapless is-multiline is-mobile">
                <div class="column">
                  <table class="GeneratedTable">
                    <tbody>
                      <tr>
                        <th>Bio</th>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Hello</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              <div class="columns is-gapless is-multiline is-mobile">
                {/*   <div class="column is-half"><button>Follow</button></div>
            <div class="column is-half"><button>Message</button></div> */}
              </div>
            </div>
            <div class="column is-one-third"></div>


            <Container className={classes.cardGrid} maxWidth="auto">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Post
                        </Typography>
                        <Typography>
                          Click here to check your likes and comments
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          Likes
                        </Button>
                        <Button size="small" color="primary">
                          Comments
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>

          )


        </div>

      </div>





    </div>

  )
}

export default UserProfile;
