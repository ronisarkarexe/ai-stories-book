import React from "react";

const stories = [
  {
    title: "The Silent Witness",
    genre: "Mystery",
    readTime: "8 min read",
    description:
      "Detective Sarah Moore uncovers a series of cryptic messages that lead to an unexpected truth.",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTc0MjN8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDB8fHx8MTc0MjQ1NjEwOHww&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 842,
    comments: 45,
  },
  {
    title: "Summer's Last Dance",
    genre: "Romance",
    readTime: "12 min read",
    description:
      "Two strangers meet on a beach during the last days of summer, changing their lives forever.",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTc0MjN8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDB8fHx8MTc0MjQ1NjEwOHww&ixlib=rb-4.0.3&q=80&w=1080",
    likes: "1.2k",
    comments: 67,
  },
  {
    title: "Dragon's Dawn",
    genre: "Fantasy",
    readTime: "15 min read",
    description:
      "In the realm of Eldara, the last dragon rider must face an ancient prophecy.",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTc0MjN8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDB8fHx8MTc0MjQ1NjEwOHww&ixlib=rb-4.0.3&q=80&w=1080",
    likes: "2.1k",
    comments: 134,
  },
];

const ExploreViewListComponent = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-blue-500/10 rounded-lg shadow-sm overflow-hidden group"
          >
            <img src={story.imageUrl} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span
                  className={`bg-pink-200 text-pink-600 px-2 py-1 rounded text-xs`}
                >
                  {story.genre}
                </span>
                {/* <div className="ml-auto text-sm text-gray-500">
                  <i className="far fa-clock mr-1"></i>
                  <span>{story.readTime}</span>
                </div> */}
              </div>
              <h3 className="font-semibold mb-2 text-gray-400">{story.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{story.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <button className="!rounded-button hover:text-gray-400 border px-3 py-1">
                  <i className="far fa-heart mr-1"></i>{" "}
                  <span>{story.likes}</span>
                </button>
                <button className="ml-2 !rounded-button hover:text-gray-400 border px-3 py-1">
                  <i className="far fa-comment mr-1"></i>{" "}
                  <span>{story.comments}</span>
                </button>
                <button className="ml-auto !rounded-button hover:text-gray-400 border px-3 py-1">
                  <i className="far fa-bookmark"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="!rounded-button bg-blue-500/10 text-custom hover:bg-blue-500/30 border px-6 py-2 font-medium text-gray-400">
          Load More Stories
        </button>
      </div>
    </div>
  );
};

export default ExploreViewListComponent;
