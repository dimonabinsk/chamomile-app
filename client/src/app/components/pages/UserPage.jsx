import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";

const UserPage = ({ userId }) => {
  const user = useSelector(getCurrentUserData());
  // console.log(user);
  return (
    <div className="flex mx-5">
      <div className="grow-0">
        <Card>
          <CardHeader>
            <img src={user.image} alt="" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {user.firstName} {user.lastName}
            </Typography>
          </CardBody>
          <CardFooter className="flex flex-col items-center">
            <Typography>{user.login}</Typography>
            <Typography>{user.email}</Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="grow">
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

UserPage.propTypes = {
  userId: PropTypes.string,
};

export default UserPage;
