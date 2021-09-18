import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { useParams } from "react-router-dom";
import { NotificationActions, NotifcationContainer } from 'material-ui-notifications';
import SideNav from "../SideNav";
import * as Content from "../Content";
import * as Bio from "../Bio";
import TopNav from "../TopNav";
import EditProfile from "../EditProfile";
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
import * as Header from "../Header";
import Notification from "../Notification";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactNotification from 'react-notifications-component'

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Notifications () {
	const classes = useStyles();
	const notify = () => {
		toast.success("Wow so easy!",{position: toast.POSITION.BOTTOM_CENTER, autoClose: false})
	};

	let { subpath } = useParams();

	return (
		<React.Fragment>
			<CssBaseline />

			<main>
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

							<div>
								<button onClick={notify}>Notify!</button>
								<ToastContainer style={{ width: "1000px" }}/>
							</div>

						</div>

					</div>

				</div>
				{/* Hero unit */}


			</main>
			{/* Footer */}
			{/* End footer */}
		</React.Fragment>
	);
}