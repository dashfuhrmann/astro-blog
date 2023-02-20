import MDXPreview from "./MDXPreview";
import PropTypes from "prop-types";

const ArticlePreview = ({ entry }) => <MDXPreview entry={entry} />;

ArticlePreview.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default ArticlePreview;
