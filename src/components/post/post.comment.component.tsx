import React from "react";

const PostCommentComponent = () => {
  return (
    <div>
      <form className="mb-4">
        <textarea
          className="w-full border border-gray-300 rounded-lg p-4 focus:ring-custom focus:border-custom"
          rows={3}
          placeholder="Add your comment..."
        ></textarea>
        <button className="!rounded-button mt-4 text-white px-6 py-2 text-sm font-medium bg-blue-700">
          Post Comment
        </button>
      </form>
      <h3 className="text-xl font-semibold mb-6">Comments (12)</h3>
      <div className="space-y-6">
        <div className="flex space-x-4">
          <img
            src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young male professional in casual business attire against a clean background&width=40&height=40&orientation=squarish&flag=d391b265-e6bb-472e-ab3f-a149e207341f"
            alt="Commenter"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <div className="bg-gray-300 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Michael Chen</h4>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <p className="text-gray-600">
                Fascinating perspective on digital storytelling! I particularly
                appreciate the emphasis on maintaining authenticity while
                leveraging new technologies.
              </p>
            </div>
            <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
              <button className="hover:text-custom">
                <i className="far fa-heart mr-1"></i> 24
              </button>
              <button className="hover:text-custom">
                <i className="far fa-comment mr-1"></i> Reply
              </button>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <img
            src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a middle-aged female business professional with a warm smile against a neutral background&width=40&height=40&orientation=squarish&flag=ea6cb718-737a-4972-9899-fd44635fbe35"
            alt="Commenter"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <div className="bg-gray-300 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Emma Thompson</h4>
                <span className="text-sm text-gray-500">5 hours ago</span>
              </div>
              <p className="text-gray-600">
                This article really resonates with my experience in digital
                marketing. The evolution of storytelling platforms has indeed
                changed how we connect with audiences.
              </p>
            </div>
            <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
              <button className="hover:text-custom">
                <i className="far fa-heart mr-1"></i> 18
              </button>
              <button className="hover:text-custom">
                <i className="far fa-comment mr-1"></i> Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCommentComponent;
