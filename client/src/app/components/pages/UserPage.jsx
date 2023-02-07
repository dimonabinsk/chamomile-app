import PropTypes from "prop-types";

const UserPage = ({ userId }) => {
  return (
    <>
      <p>{userId}</p>
    </>
  );
};

UserPage.propTypes = {
    userId: PropTypes.string
}

export default UserPage;
