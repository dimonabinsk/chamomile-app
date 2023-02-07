import React from "react";
// import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const CardMain = () => {
  return (
    <>
      <section className=" relative top-[1124px] px-3 lg:px-5">
        <Typography
          variant="h2"
          aria-label="Наши любимые цветы"
          className="mb-8 font-bk-rt dark:text-main-white dark:mix-blend-difference"
        >
          Любимые наши цветы
        </Typography>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 lg:gap-4">
          <Card className="mt-10">
            <CardHeader>
              <img src="images/catalog/beauty-india-1.jpg" alt="plant" />
            </CardHeader>
            <CardBody>
              <Typography variant="h3" className=" font-miama">
                Красавица Индии
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-10">
            <CardHeader>
              <img src="images/catalog/beauty-india-1.jpg" alt="plant" />
            </CardHeader>
            <CardBody>
              <Typography variant="h3" className=" font-miama">
                Красавица Индии
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-10">
            <CardHeader>
              <img src="images/catalog/beauty-india-1.jpg" alt="plant" />
            </CardHeader>
            <CardBody>
              <Typography variant="h3" className=" font-miama">
                Красавица Индии
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-10">
            <CardHeader>
              <img src="images/catalog/beauty-india-1.jpg" alt="plant" />
            </CardHeader>
            <CardBody>
              <Typography variant="h3" className=" font-miama">
                Красавица Индии
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
};

// GetCardMain.propTypes = {};

export default CardMain;
