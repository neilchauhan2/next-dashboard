import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/Posts/PostsPagination";
import PostsTable from "@/components/Posts/PostsTable";

function PostsPage() {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  )
}

export default PostsPage;