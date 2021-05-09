import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuotesDetails = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>{params.quoteid}</h1>
      <Route path={`/quotes/${params.quoteid}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
