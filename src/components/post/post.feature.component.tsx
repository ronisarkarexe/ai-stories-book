import React from "react";
import { useGetFeaturedListsQuery } from "../../redux/apis/post.api";
import { Post } from "../../models/post";
import LoadingAnimation from "../loading/loading.component";

const ExploreFeatureComponent = () => {
  const { data, isLoading } = useGetFeaturedListsQuery(undefined);
  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="grid grid-cols-2 gap-6">
      {data?.posts?.length ?? 0 > 0 ? (
        data?.posts?.map((post: Post) => (
          <div className="relative group overflow-hidden rounded-lg">
            <img src={post.imageURL} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-200 text-sm mt-2">
                {post.content.slice(0, 100)}...
              </p>
              <div className="flex items-center mt-4">
                <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">
                  {post.tag}
                </span>
                <div className="ml-auto flex items-center text-white text-sm">
                  <i className="fas fa-heart mr-1"></i>
                  <span>{post.likesCount}</span>
                  <i className="fas fa-comment ml-3 mr-1"></i>
                  <span>{post.commentsCount}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Feature Post is not available!</div>
      )}
    </div>
  );
};

export default ExploreFeatureComponent;
