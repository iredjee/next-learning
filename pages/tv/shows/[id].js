import axios from 'axios';
import Layout from "../../../components/Layout";

const Show = ({ show }) => {
  return (
    <Layout>
      <h1>{show.name}</h1>
      {show.image ? <img src={show.image.medium} /> : null}
    </Layout>
  );
};

Show.getInitialProps = async (context) => {
  const { id } = context.query;
  const { data: show } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

  return { show };
};

export default Show;
