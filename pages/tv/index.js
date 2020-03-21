import Link from "next/link";
import axios from "axios";
import Layout from "../../components/Layout";

const TVShows = (props) => (
  <Layout>
    <h1>TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/tv/shows/[id]" as={`/tv/shows/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

TVShows.getInitialProps = async () => {
  const { data } = await axios.get('https://api.tvmaze.com/search/shows?q=batman');

  return { shows: data.map(({ show }) => show) };
}

export default TVShows;
