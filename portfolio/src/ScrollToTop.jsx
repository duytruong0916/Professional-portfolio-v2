import React from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop(props) {
  React.useEffect(() => {
    const listener = props.history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => listener();
  }, []);

  return <></>;
}

export default withRouter(ScrollToTop);
