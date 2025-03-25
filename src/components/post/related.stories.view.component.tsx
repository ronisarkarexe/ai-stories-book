import React from "react";
import { Post } from "../../models/post";

interface IRelatedStoriesComponentProps {
  posts: Post[];
}

const RelatedStoriesComponent: React.FC<IRelatedStoriesComponentProps> = ({
  posts,
}) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {posts.length > 0 ? (
        posts.map((post: Post) => (
          <a key={post._id} href="#" className="group">
            <img
              src={post.imageURL}
              alt="Related Story"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="font-medium group-hover:text-custom text-gray-400">
              {post.title}
            </h4>
            <p className="text-sm text-gray-500">
              {post?.content.slice(0, 120)}...
            </p>
          </a>
        ))
      ) : (
        <p className="text-center text-gray-600">No related stories found.</p>
      )}
    </div>
  );
};

export default RelatedStoriesComponent;
