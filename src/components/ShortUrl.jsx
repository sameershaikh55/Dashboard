import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { ImCross, ImLink } from "react-icons/im";
import Button from "@material-ui/core/Button";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const ShortUrl = ({ openBio2, setOpenBio2 }) => {
	const handleClose = () => {
		setOpenBio2(false);
	};

	return (
		<div className="bio_link_container">
			<Dialog
				open={openBio2}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">
					<div className="d-flex justify-content-between align-items-center">
						<h5>
							<span className="borderBottom">Create bio</span>link page
						</h5>
						<div>
							<ImCross
								onClick={handleClose}
								className="pointer"
								fontSize="1rem"
							/>
						</div>
					</div>
				</DialogTitle>
				<DialogContent className="pb-2">
					<DialogContentText id="alert-dialog-slide-description">
						<div className="text-secondary">
							<svg
								class="svg-inline--fa fa-signature fa-w-20 fa-fw fa-sm mr-1"
								aria-hidden="true"
								focusable="false"
								data-prefix="fa"
								data-icon="signature"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512"
								data-fa-i2svg=""
								width="20px"
								className="me-1"
							>
								<path
									fill="#212529"
									d="M623.2 192c-51.8 3.5-125.7 54.7-163.1 71.5-29.1 13.1-54.2 24.4-76.1 24.4-22.6 0-26-16.2-21.3-51.9 1.1-8 11.7-79.2-42.7-76.1-25.1 1.5-64.3 24.8-169.5 126L192 182.2c30.4-75.9-53.2-151.5-129.7-102.8L7.4 116.3C0 121-2.2 130.9 2.5 138.4l17.2 27c4.7 7.5 14.6 9.7 22.1 4.9l58-38.9c18.4-11.7 40.7 7.2 32.7 27.1L34.3 404.1C27.5 421 37 448 64 448c8.3 0 16.5-3.2 22.6-9.4 42.2-42.2 154.7-150.7 211.2-195.8-2.2 28.5-2.1 58.9 20.6 83.8 15.3 16.8 37.3 25.3 65.5 25.3 35.6 0 68-14.6 102.3-30 33-14.8 99-62.6 138.4-65.8 8.5-.7 15.2-7.3 15.2-15.8v-32.1c.2-9.1-7.5-16.8-16.6-16.2z"
								></path>
							</svg>
							Long URL
						</div>
						<div className="mb-4 mt-1">
							<input
								style={{ border: "1px solid #ccc", fontSize: "0.9rem" }}
								type="text"
								className="w-100 py-1 px-2 rounded-3"
								placeholder="https://domain.com/example"
							/>
						</div>
						<div className="d-flex align-items-center mt-1">
							<ImLink className="me-1 text-dark" />
							<div className="text-secondary">Biolink URL</div>
						</div>
						<div
							style={{ border: "1px solid #ccc", height: "36px" }}
							className="d-none d-sm-flex rounded-3 my-1"
						>
							<p
								style={{ background: "#ededed" }}
								className="mb-0 small d-flex align-items-center px-2 h-100"
							>
								https://test.minilink.bio/
							</p>
							<input
								style={{ fontSize: "0.9rem" }}
								type="text"
								placeholder="your-custom-alias"
								className="border-0 border-start ps-3 pe-1 w-100"
							/>
						</div>
						<div
							style={{ border: "1px solid #ccc", height: "70px" }}
							className="d-flex d-sm-none flex-column rounded-3 my-1"
						>
							<p
								style={{ background: "#ededed" }}
								className="mb-0 small d-flex align-items-center px-2 h-100"
							>
								https://test.minilink.bio/
							</p>
							<input
								style={{ fontSize: "0.9rem" }}
								type="text"
								placeholder="your-custom-alias"
								className="border-0 border-start ps-3 pe-1 h-100"
							/>
						</div>
						<p style={{ fontSize: "12px" }} className="small fw-bold mb-2">
							Leave empty for a random generated one.
						</p>
						<div className="w-100 mt-4">
							<Button
								variant="contained"
								color="primary"
								href="#contained-buttons"
								className="text-white w-100"
							>
								Create biolink page
							</Button>
						</div>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ShortUrl;
