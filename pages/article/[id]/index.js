// import { useRouter } from 'next/router';
import Link from 'next/link';

export const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <h4>This is an example of article {article.id}</h4>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <br />
      <Link href='/'>&larr; Go back</Link>
    </>
  );
};

export default article;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
