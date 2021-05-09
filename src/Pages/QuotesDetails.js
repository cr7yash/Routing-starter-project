import { useParams } from "react-router-dom";

const QuotesDetails = () => {
  let { quoteid } = useParams();
  return <h1>{quoteid}</h1>;
};

export default QuotesDetails;
