import React, { useState } from "react";
import { useGetPostListsQuery } from "../../../redux/apis/post.api";
import { useDebounced } from "../../../hooks/global";
import { Post, Topic } from "../../../models/post";
import PaginationComponent from "../../pagination/pagination.component";

const PostListsComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const query: Record<string, string | number> = {
    page,
    limit: size,
  };

  const debounceTerm = useDebounced({
    searchQuery: searchTerm,
    daley: 600,
  });

  if (debounceTerm) {
    query["searchTerm"] = debounceTerm;
  }

  const { data, isLoading } = useGetPostListsQuery({ ...query });

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getTopicBadges = (topics: Topic[]) => {
    return topics.map((topic) => (
      <span
        key={topic._id}
        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
        style={{ backgroundColor: `${topic.color}20`, color: topic.color }}
      >
        {topic.title}
      </span>
    ));
  };

  const getStatusBadge = (isPublished: boolean) => {
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          isPublished
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {isPublished ? "Published" : "Draft"}
      </span>
    );
  };

  return (
    <div className="bg-blue-500/10 rounded-lg shadow-sm border border-slate-600">
      <div className="w-full flex justify-between items-center p-4 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-400">Posts</h2>
        <div className="ml-3">
          <div className="w-full max-w-sm min-w-[200px] relative">
            <div className="relative">
              <input
                className="w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <button
                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center rounded"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-4 h-4 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="p-8 flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-500">
            <thead className="bg-blue-500/10">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Author
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Topics
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Stats
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Created
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-blue-500/10 divide-y divide-slate-200">
              {data?.posts?.map((post: Post) => (
                <tr key={post._id} className="hover:bg-blue-500/10">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {post.imageURL && (
                        <div className="flex-shrink-0 h-10 w-10 mr-3">
                          <img
                            className="h-10 w-10 rounded object-cover"
                            src={post.imageURL}
                            alt={post.title}
                          />
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          {post.title}
                        </div>
                        <div className="text-xs text-slate-500 truncate max-w-xs">
                          {post.tag}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">
                      {post.author.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {post.author.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-1">
                    {getTopicBadges(post.topic)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(post.isPublished)}
                    {post.isFeaturedPost && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Featured
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-slate-900">
                          {post.likesCount}
                        </div>
                        <div className="text-xs text-slate-500">Likes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-slate-900">
                          {post.commentsCount}
                        </div>
                        <div className="text-xs text-slate-500">Comments</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-slate-900">
                          {post.viewsCount}
                        </div>
                        <div className="text-xs text-slate-500">Views</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {formatDate(post.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {data?.meta && (
        <div className="sticky bottom-0 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 z-10 mt-4">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
            <PaginationComponent
              current={page}
              pageSize={size}
              total={data.meta.total}
              onChange={onPaginationChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostListsComponent;
