import { useGetLatestListsQuery } from "../../../redux/apis/post.api";
import { Post } from "../../../models/post";
import toast, { Toaster } from "react-hot-toast";
import LoadingAnimation from "../../loading/loading.component";

const LatestPostsComponent = () => {
  const { data, isLoading } = useGetLatestListsQuery(undefined);
  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-300 mb-6">Latest Posts</h2>
      <div className="space-y-6">
        {data?.posts?.length ?? 0 > 0 ? (
          data?.posts?.map((post: Post) => (
            <div
              key={post._id}
              className="bg-blue-500/10 rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center mb-4">
                {/* <img
                  className="h-10 w-10 rounded-full"
                  src="https://avatars.githubusercontent.com/u/76697055?v=4"
                  alt=""
                /> */}
                <div className="ml-0">
                  <p className="text-sm font-medium text-gray-400">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-gray-500">Mar 14, 2024</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {post.content.slice(0, 170)}...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="flex items-center mr-4">
                    <i className="far fa-heart mr-1"></i> {post.likesCount}
                  </span>
                  <span className="flex items-center mr-4">
                    <i className="far fa-comment mr-1"></i> {post.commentsCount}
                  </span>
                </div>
                <div className="flex space-x-2">
                  {post.topic.map((topic) => (
                    <span
                      key={topic._id}
                      className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${topic.color}`}
                    >
                      {topic.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Post is not available!</div>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default LatestPostsComponent;
