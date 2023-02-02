import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const GetCard = ({ src, alt, title, price, path }) => {
  return (
    <Card className="">
      <CardHeader color="blue-gray" className=" h-72">
        <Link
          to={path}
          className={
            "after:absolute after:top-[80%]  after:left-[calc(50%-60px)] after:w-[120px]  after:cursor-pointer after:rounded-md after:bg-green-1 after:bg-opacity-70 after:p-1  after:text-center after:font-bk-rt after:text-lg after:text-main-white after:opacity-0 after:content-['подробнее...'] hover:after:opacity-100"
          }
        >
          <img
            src={src}
            alt={alt}
            className=" h-full w-full object-cover transition hover:scale-[1.05] "
          />
        </Link>
      </CardHeader>
      <CardBody className="scroll_card h-40 overflow-auto text-center">
        <Typography variant="h5" className="mb-2 font-miama">
          {title}
        </Typography>
        <Typography className="font-bk-rt">
          Далеко-далеко за словесными, горами в стране гласных и согласных живут
          рыбные тексты. Маленькая, бросил. Там проектах, переписали ему
          языкового вершину рыбного раз злых журчит на берегу! Меня
          переписывается живет большого маленькая осталось подпоясал.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">от {price} руб</Typography>
        <Button ripple={true} color="green" className=" font-bk-rt">
          <FontAwesomeIcon icon={faBagShopping} className="mr-3" size="lg" />В
          корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

GetCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  path: PropTypes.string,
};

export default GetCard;
