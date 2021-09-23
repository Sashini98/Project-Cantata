import { useParams, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfileImageDialog } from "../../../../views/admin/UpdateProfileImageDialog.jsx";
import { axiosInstance, BACKEND_API } from "../../../../axios/AxiosInstance";
import { updateUser } from "../../../../store/action/authAction";
import { useSnackbar } from "notistack";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SideNav from "../SideNav";
import * as Header from "../Header";
import Notification from "../Notification";
import * as Content from "../Content";
import * as Bio from "../Bio";
import TopNav from "../TopNav";
import EditProfile from "../EditProfile";
import user1 from '../../../../Assets/Admin/user.png';
import React, { useState, useEffect } from 'react';
//import { Modal, Button } from 'antd';
import Modal from '@material-ui/core/Modal';
import axios from "axios";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const { enqueueSnackbar } = useSnackbar();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const user = useSelector((state) => state.authReducer);
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();

  const classes = useStyles();

  const [userID, setID] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [showImage, setShowImage] = useState("");
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialUserState = {
    userId: user.userID,
    firstName: user.fname,
    lastName: user.lname,
    userImage: user.userImage,
    userName: user.userName,
    bio: user.bio,
  }

  const [userDetails, setUserDetails] = useState(initialUserState);

  const handleSetProfileImage = (image) => {
    setProfileImage(image);
  }

  console.log(userID);
  let formData = new FormData();
  formData.append('Fname', fname);
  formData.append('Lname', lname);
  formData.append('Bio', bio);
  formData.append('Username', followers);
  formData.append('following', following);
  formData.append('Image', image);
  formData.append('userId', sessionStorage.getItem("UserID"))
  axios.post('http://localhost:3001/editprofile', formData).then(() => {
    console.log("success");
    alert("Profile changed successfully ");
    history.push("/UserProfile");
  });

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  }

  const handleEnableUpdate = () => {
    setIsUpdate(true);
  }

  const handleDisableUpdate = () => {
    setUserDetails(initialUserState)
    setIsUpdate(false);
  }

  const handleUpdate = async () => {

    let bodyFormData = new FormData();
    bodyFormData.append("image", Image);

    await axiosInstance({
      method: "POST",
      url: `${BACKEND_API.UPLOAD_IMAGE}/${user.userID}`,
      data: bodyFormData
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
    })
  }

  let { subpath } = useParams();

  const imageChange = (event) => {
    let reader = new FileReader();
    reader.onload = e => {
      setImage(event.target.files[0]);
      setShowImage(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  useEffect(() => {
    const id = sessionStorage.getItem("UserID") ? sessionStorage.getItem("UserID") : 1;
    axios.get(`http://localhost:3001/getProfile?id=${id}`).then((result) => {
      if (result.data.length) {
        const bufferImage = result.data[0].Image.data;
        const b64 = new Buffer.from(bufferImage).toString('base64');
        console.log(`data:image/png;base64,${b64}`);
        setFname(result.data[0].Fname);
        setLname(result.data[0].Lname);
        setBio(result.data[0].Bio);
        setFollowers(result.data[0].Username);
        setImage(result.data[0].Image);
        // setShowImage(b64);
      }
    })
  }, [])
  let { userid } = useParams();
  console.log(userid);

  const [record, setRecord] = useState([]);
  const [modal1IsOpen, setIsOpen1] = useState(false);
  const [selectedReport, setSelectedReport] = useState({});
  const [reportType, setReportType] = useState({})

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
    <>
      <UpdateProfileImageDialog
        isDialogOpen={isDialogOpen}
        handleCloseDialog={handleCloseDialog}
        handleSetProfileImage={handleSetProfileImage}
        handleUpdate={handleUpdate}
      />
      <div>
        <div class="columns">
          <div class="column is-2">
            <SideNav />
          </div>

          <div class={"column is-4"}>
            <div className="flex flex-wrap justify-center">
              <img id="user" src={user1} width="400" height="400" style={{ borderRadius: 1000 / 2, marginTop: "10%", borderColor: 'black', borderWidth: 5 }} />
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    hidden
                    alt="..."
                    src={`data:image/jpeg;base64,${user.Image}`}
                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-120-px"
                    onChange={(event) => (setImage(event.target.value))}
                  />
                </div>
              </div>
              <div className="w-full px-4 text-center mt-20">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <button
                      className="bg-emerald-400 text-white active:bg-emerald-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setIsDialogOpen(true)}
                    >
                      Upload Profile Image
                    </button>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="column is-6">
            <TopNav />
            {subpath === "content" && <Content />}
            {subpath === "bio" && <Bio />}
            {subpath === "EditProfile" && <EditProfile />}
            {/* {subpath === "followers" && <Followers />} */}
            {/*  {subpath === "following" && <Following />} */}
            {subpath === "header" && <Header />}
            {subpath === "Notification" && <Notification />}

            <div class="columns is-gapless is-multiline is-mobile">

              <Container component="main" maxWidth="1920px">
                <CssBaseline />



                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Profile
                  </Typography>
                  <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}> First Name :
                        <TextField
                          autoComplete="fname"
                          name="text"
                          variant="outlined"
                          fullWidth
                          id="text"
                          label={user.fname ? "" : "First Name"}
                          onChange={(event) => (setFname(event.target.value))}
                          autoFocus
                          value={user.fname}
                          disabled={!isUpdate}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}> Last Name :
                        <TextField
                          autoComplete="lname"
                          name="text"
                          variant="outlined"
                          fullWidth
                          id="text"
                          label={user.lname ? "" : "Last Name"}
                          onChange={(event) => (setLname(event.target.value))}
                          autoFocus
                          value={user.lname}
                          disabled={!isUpdate}
                        />
                      </Grid>
                      <Grid item xs={12}> Bio :
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="text"
                          label={user.bio ? "" : "Description"}
                          onChange={(event) => (setBio(event.target.value))}
                          name="text"
                          value={user.bio}
                          disabled={!isUpdate}
                        />
                      </Grid>
                      <Grid item xs={12}> User Name :
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="text"
                          label={user.followers ? "" : "@UserName"}
                          name="text"
                          onChange={(event) => (setFollowers(event.target.value))}
                          autoComplete="text"
                          value={user.followers}
                          disabled={!isUpdate}
                        />
                      </Grid>
                      {/* <Grid item xs={12} sm={6}> Following :
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="text"
                        label="21 Following"
                        type="text"
                        id="text"
                        onChange={(event)=>(setFollowing(event.target.value))}
                        autoComplete="current-password"
                      />
                    </Grid> */}
                      <Grid item xs={12}>
                        {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                //label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
                      </Grid>
                    </Grid>
                    {/* <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Edit
          </Button>

          <Button
            type="submit"
            width="20px"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button> */}

                    {/* <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={editprofile}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </Grid> */}

                    <div className="text-center flex justify-between">

                      {isUpdate ? (
                        <div>
                          <button
                            className="bg-emerald-400  text-white active:bg-emerald-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleUpdate}
                          >
                            Update
                          </button>
                          <button
                            className="bg-red-500  text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleDisableUpdate}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          className="bg-emerald-400 text-white active:bg-emerald-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={handleEnableUpdate}
                        >
                          Update Details
                        </button>
                      )}
                    </div>



                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        {/* <Link href="../../index.js" variant="body2">
                        Go Back
                      </Link> */}
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </Container>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}