import MDX from "@mdx-scoped-runtime";
import PropTypes from "prop-types";
import BlockQuote from "./BlockQuote";

const MDXPreview = ({ entry }) => {
  //   const theme = useTheme();

  return (
    <MDX
      components={{
        // DOM element + React component overrides
        BlockQuote,
      }}
    >
      {entry.getIn(["data", "body"])}
    </MDX>
  );
};

MDXPreview.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default MDXPreview;
