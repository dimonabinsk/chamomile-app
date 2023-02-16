import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../store/users";
import { UploadField } from "../common/uploadField";

const UserPage = ({ userId, admin }) => {
  const user = useSelector(getCurrentUserData());
  // console.log(user);
  return (
    <div className="mx-5 flex">
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
        <div className="">
          <UploadField />
        </div>
        <div className="">
          {admin && (
            <Link className="mt-5 text-base dark:text-main-white" to={"/admin"}>
              Перейти в админ-панель
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

UserPage.propTypes = {
  userId: PropTypes.string,
  admin: PropTypes.bool,
};

export default UserPage;
