import React, { Profiler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideNav from "./Components/SideNav";
import * as Content from "./Components/Content";
import * as Bio from "./Components/Bio/index";
import TopNav from "./Components/TopNav";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import EditProfile from "./Components/EditProfile";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
/* import Followers from "./Components/Followers"; */
/* import Following from "./Components/Following"; */
import * as Header from "./Components/Header";
import Notification from "./Components/Notification";
import user1 from '../../Assets/Admin/random.jpg';
import "./index.css";
import axios from 'axios';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
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
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance, BACKEND_API } from "../../axios/AxiosInstance";
import { updateUser } from "../../store/action/authAction";
import Reports from "../Feed/Components/MainPage/Components/Reports/index";
import userimg from "../../Assets/Admin/user.png";


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

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Upload' },
  { icon: <PrintIcon />, name: 'Print' },
  //{ icon: <ShareIcon />, name: 'Share' },
];

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function UserProfile() {
  const { enqueueSnackbar } = useSnackbar();
  const user = useSelector((state) => state.authReducer);
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState('1');


  const initialUserState = {
    userId: user.userID,
    firstName: user.fname,
    lastName: user.lname,
    userImage: user.userImage,
    userName: user.userName,
    bio: user.bio,
  }
  const [userDetails, setUserDetails] = useState(initialUserState);


  const handleEnableUpdate = () => {
    setIsUpdate(true);
  }

  const handleDisableUpdate = () => {
    setUserDetails(initialUserState)
    setIsUpdate(false);
  }

  const handleChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value
    })
  }

  let { subpath } = useParams();

  const handleUpdate = async () => {
    await axiosInstance({
      method: 'POST',
      url: BACKEND_API.UPDATE_USER,
      data: userDetails
    }).then(res => {
      if (res.status === 200) {
        enqueueSnackbar("Updated User Details", {
          variant: 'success'
        });

        dispatch(updateUser({
          userID: userDetails.userId,
          fname: userDetails.firstName,
          lname: userDetails.lastName,
          userImage: userDetails.userImage,
          bio: userDetails.bio,
        }))
        setIsUpdate(false);
      }
    }).catch((error) => {
      if (error.response) {
        enqueueSnackbar(error.response.data.message, {
          variant: 'error'
        });
      } else {
        enqueueSnackbar("Something went wrong", {
          variant: 'error'
        });
      }
    });
  }
  let { userid } = useParams();
  console.log(userid);

  const [record, setRecord] = useState([]);
  const [modal1IsOpen, setIsOpen1] = useState(false);
  const [selectedReport, setSelectedReport] = useState({});
  const [reportType, setReportType] = useState({});



  const getUser = () => {

    axios.get(`http://localhost:5000/api/v1/user/getbyId/${userid}`)
        .then(response => {
            setRecord(response.data);
            console.log(response);
        });
}

  useEffect(() => {
    getUser();
  }, []);

  const openModal1 = (e) => {
    // console.log(e.target.id);
    setSelectedReport(e.target.id);
    setReportType(e.target.name);
    setIsOpen1(true);
    // console.log("sel" + selectedLyric);
  };


  const closeModal1 = () => {
    setIsOpen1(false);
  };

  return (
    <div>
<<<<<<< HEAD
        <table>
                    {record.map((user) =>
                        <tr>
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
=======
      <table>
        {record.map((user) =>
          <tr>
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
>>>>>>> 83e066433c0d758bcfc541adcb49e9fc6907401d




<<<<<<< HEAD
          <div class="columns is-gapless is-multiline is-mobile">
            <div class="column is-one-third" align="center">
              <img id="user" src={userimg} width="300" height="300" style={{ borderRadius: 1000 / 2, marginTop: "10%", borderColor: 'black', borderWidth: 5 }} />
            </div>
            <div class="column is-one-third">
              <div class="columns is-gapless is-multiline is-mobile">
                <div class="column">
                  <b><h1>
                    <a class="name"> {user.Fname}  {user.Lname}
                      {/* <input
=======
                <div class="columns is-gapless is-multiline is-mobile">
                  <div class="column is-one-third" align="center">
                    <img id="user" src={user1} width="300" height="300" style={{ borderRadius: 1000 / 2, marginTop: "10%", borderColor: 'black', borderWidth: 5 }} />
                  </div>
                  <div class="column is-one-third">
                    <div class="columns is-gapless is-multiline is-mobile">
                      <div class="column">
                        <b><h1>
                          <a class="name"> {user.Fname}  {user.Lname}
                            {/* <input
>>>>>>> 83e066433c0d758bcfc541adcb49e9fc6907401d
                        value={"Bhagya" + " " + "Gunathilaka"}
                        disabled={!isUpdate}
                        type="text" name={"name"}
                      /> */}
                          </a></h1>
                        </b>
                      </div>
                    </div>
                    {/* <div class="columns is-gapless is-multiline is-mobile" id="content1">
                <div class="column is-one-third">89</div>
                <div class="column is-one-third">66</div>
              </div>
              <div class="columns is-gapless is-multiline is-mobile" id="content">
                <div class="column is-one-third">#Followers</div>
                <div class="column is-one-third">#Following</div>
              </div> */}
                    <div class="columns is-gapless is-multiline is-mobile">
                      <div class="column">
                        <table class="GeneratedTable">
                          <thead>
                            <tr>
                              <th class="bio">Joined At : </th>
                              <td>    {user.CreatedAt} </td>

                            </tr>
                            <tr>
                              <th class="bio">Email : </th>
                              <td> {user.Email} </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                {/* <input
                            value={userDetails.bio}
                            disabled={!isUpdate}
                            type="text" name={"bio"}
                          /> */}
                              </td>
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

                  <div class="column is-one-third">
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" color="error" className="bg-red" id={user.UserId} name="user" onClick={openModal1}>
                        Report
                      </Button>
                    </Stack>
                  </div>



                  <Reports
                    isOpen={modal1IsOpen}
                    onRequestClose={closeModal1}
                    selectedReport={selectedReport}
                    reportType={reportType}
                  ></Reports>

                  <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                          <Tab label="Cover" value="1" />
                          <Tab label="Lyrics" value="2" />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <Container className={classes.cardGrid} maxWidth="auto">

                          <Grid container spacing={4}>

                            <Grid item xs={12} sm={6} md={4}>
                              <Card className={classes.card}>
                                <CardMedia
                                  className={classes.cardMedia}
                                  image="https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
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
                                    Like
                                  </Button>
                                  <Button size="small" color="primary">
                                    Comment
                                  </Button>
                                </CardActions>
                              </Card>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                              <Card className={classes.card}>
                                <CardMedia
                                  className={classes.cardMedia}
                                  image="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
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
                                    Like
                                  </Button>
                                  <Button size="small" color="primary">
                                    Comment
                                  </Button>
                                </CardActions>
                              </Card>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                              <Card className={classes.card}>
                                <CardMedia
                                  className={classes.cardMedia}
                                  image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
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
                                    Like
                                  </Button>
                                  <Button size="small" color="primary">
                                    Comment
                                  </Button>
                                </CardActions>
                              </Card>
                            </Grid>


                          </Grid>

                        </Container>
                      </TabPanel>

                      <TabPanel value="2">
                        <Container className={classes.cardGrid} maxWidth="auto">

                          <Grid container spacing={4}>
                            {cards.map((card) => (
                              <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                  <CardMedia
                                    className={classes.cardMedia}
                                    image="https://images.unsplash.com/photo-1514582086679-4024becf927e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
                                      Like
                                    </Button>
                                    <Button size="small" color="primary">
                                      Comment
                                    </Button>
                                  </CardActions>
                                </Card>



                              </Grid>

                            ))}

                          </Grid>

                        </Container>
                      </TabPanel>
                    </TabContext>
                  </Box>


                </div>


              </div>

            </div>


          </tr>
        )}
      </table>


    </div>

  )
}

