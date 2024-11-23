import Header from "./Header";
import Main from "./Main";
import PropTypes from "prop-types";

function Content({ toggleSidebar }) {
  return (
    <div
      className={
        toggleSidebar
          ? "px-5 pt-11 md:px-11 w-full"
          : "px-5 pt-2 md:px-11 w-full"
      }
    >
      <Header />
      <Main />
    </div>
  );
}
Content.propTypes = {
  toggleSidebar: PropTypes.bool.isRequired, // Must be a boolean
};

export default Content;
