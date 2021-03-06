import Layout from "../components/Layout"
import Loader from "../components/Loader"
import Link from "next/link"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"

const DraftsQuery = gql`
  query DraftsQuery {
    drafts {
      id
      title
      content
      published
      author {
        id
        name
      }
    }
  }
`

const Post = ({ post }) => (
  <Link href="/p/[id]" as={`/p/${post.id}`}>
    <a>
      <h2>{post.title}</h2>
      <small>By {post.author ? post.author.name : "Unknown Author"}</small>
      <p>{post.content}</p>
    </a>
  </Link>
)

const Drafts = () => {
  const { loading, error, data } = useQuery(DraftsQuery, {
    fetchPolicy: "cache-and-network",
  })

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Layout>
      <div className="page">
        <h1>Drafts</h1>
        <main>
          <div className="posts">
            {data.drafts.map(post => (
              <div key={post.id} className="post">
                <Post post={post} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Drafts
