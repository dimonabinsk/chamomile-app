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

const UserPage = ({ userId, admin }) => {
  const user = useSelector(getCurrentUserData());
  // console.log(user);
  return (
    <div className="mx-5 flex justify-around">
      <div className="">
        <Card>
          <CardHeader>
            <img src={user.image} alt="" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {user.firstName} {user.lastName}
            </Typography>
            {admin && (
              <Typography className="mt-5 dark:text-main-white">
                (Администратор)
              </Typography>
            )}
          </CardBody>
          <CardFooter className="flex flex-col items-center">
            <Typography>{user.login}</Typography>
            <Typography>{user.email}</Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="">
        <div className="">
          {admin && (
            <ul>
              <li className="mt-5 text-base hover:text-green-2 dark:text-main-white dark:hover:text-green-3">
                <Link className="" to={"/admin"}>
                  Перейти в админ-панель
                </Link>
              </li>
              <li className="mt-5 text-base hover:text-green-2 dark:text-main-white dark:hover:text-green-3">
                <Link className="" to={"/admin/upload"}>
                  Создать и добавить новый продукт
                </Link>
              </li>
              <li className="mt-5 text-base hover:text-green-2 dark:text-main-white dark:hover:text-green-3">
                <Link className="" to={"/admin/list_product"}>
                  Редактировать список продуктов
                </Link>
              </li>
            </ul>
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
