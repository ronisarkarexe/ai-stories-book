import React from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../../models/post";

interface IExploreViewListComponentProps {
  posts: Post[];
  isLoading: boolean;
  isError: boolean;
}

const ExploreViewListComponent: React.FC<IExploreViewListComponentProps> = ({
  posts,
  isLoading,
  isError,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {posts.length > 0 ? (
          posts.map((story) => (
            <div
              key={story._id}
              onClick={() => navigate(`/post/${story._id}`)}
              className="cursor-pointer bg-blue-500/10 rounded-lg shadow-sm overflow-hidden group"
            >
              <img src={story.imageURL} className="w-full h-36 object-cover" />
              <div className="p-2">
                <div className="flex items-center mb-2">
                  <span className="bg-pink-200 text-pink-600 px-2 py-1 rounded text-xs">
                    {story.tag}
                  </span>
                </div>
                <h3 className="font-semibold mb-1 text-gray-400">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {story.content.slice(0, 60)}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <button className="!rounded-button hover:text-gray-400 border px-3 py-1">
                    <i className="far fa-heart mr-1"></i>{" "}
                    <span>{story.likesCount}</span>
                  </button>
                  <button className="ml-2 !rounded-button hover:text-gray-400 border px-3 py-1">
                    <i className="far fa-comment mr-1"></i>{" "}
                    <span>{story.commentsCount}</span>
                  </button>
                  <button className="ml-auto !rounded-button hover:text-gray-400 border px-3 py-1">
                    <i className="far fa-bookmark"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No posts available</div>
        )}
      </div>
    </div>
  );
};

export default ExploreViewListComponent;
