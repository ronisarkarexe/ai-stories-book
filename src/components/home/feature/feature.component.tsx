import { Post } from "../../../models/post";
import { useGetFeaturedListsQuery } from "../../../redux/apis/post.api";
import toast, { Toaster } from "react-hot-toast";
import LoadingAnimation from "../../loading/loading.component";

const FeatureComponent = () => {
  const { data, isLoading } = useGetFeaturedListsQuery(undefined);
  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-300 mb-6">Featured Posts</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {data?.posts?.length ?? 0 > 0 ? (
          data?.posts?.map((post: Post) => (
            <div
              key={post._id}
              className="bg-blue-500/10 rounded-lg shadow-sm overflow-hidden"
            >
              <img
                className="h-48 w-full object-cover"
                src={post.imageURL}
                alt={post.title}
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {/* <img className="h-8 w-8 rounded-full" src="" alt="" /> */}
                  <div className="ml-0">
                    <p className="text-sm font-medium text-gray-400">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-gray-500">Mar 16, 2024</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.content.slice(0, 100)}...
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="flex items-center mr-4">
                    <i className="far fa-heart mr-1"></i> {post.likesCount}
                  </span>
                  <span className="flex items-center mr-4">
                    <i className="far fa-comment mr-1"></i> {post.commentsCount}
                  </span>
                  {/* <span className="flex items-center">
                    <i className="far fa-bookmark mr-1"></i> 89
                  </span> */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Feature Post is not available!</div>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default FeatureComponent;
