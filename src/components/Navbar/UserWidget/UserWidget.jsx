import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { useState } from "react";
import UserForm from "../../UserForm/UserForm";

const UserWidget = () => {
	const [openDialog, setOpenDialog] = useState(false);

	const handleOpenDialog = () => {
		setOpenDialog(true);
	};

	return (
		<>
			<Button
				startIcon={<AccountCircleIcon />}
				size="large"
				onClick={handleOpenDialog}
			>
				Usuario
			</Button>
			<UserForm
				openDialog={openDialog}
				setOpenDialog={setOpenDialog}
				isInCart={false}
			></UserForm>
		</>
	);
};

export default UserWidget;
