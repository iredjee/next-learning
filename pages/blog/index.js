import Link from 'next/link';

import Layout from "../../components/Layout";

const PostItem = ({ id, title }) => (
  <li>
    <Link href={`/blog/post?id=${id}`}>
      <a>{title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>Bloggyyyy</h1>
      <ul>
        <PostItem id="1" title="Blog post 1" />
        <PostItem id="2" title="Blog post 2" />
        <PostItem id="3" title="Blog post 3" />
      </ul>
    </Layout>
  )
}