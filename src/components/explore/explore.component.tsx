import React from "react";
import { Link } from "react-router-dom";
import BackHomeComponent from "../back_home/back.home.component";
import ExploreViewListComponent from "./explore.view.list.component";
import ExploreFeatureComponent from "./explore.feature.component";

const ExploreComponent = () => {
  return (
    <div className="pt-3">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <Link to="/">
          <div className="mb-4">
            <BackHomeComponent />
          </div>
        </Link>
        <div className="flex gap-8">
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-1">
              <h3 className="text-2lg font-semibold mb-4 text-gray-400">
                Filters
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 text-gray-400">Genres</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-400 text-custom focus:ring-custom"
                      />
                      <span className="ml-2 text-sm text-gray-500">
                        Fantasy
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-400 text-custom focus:ring-custom "
                      />
                      <span className="ml-2 text-sm text-gray-500">
                        Science Fiction
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-400 text-custom focus:ring-custom"
                      />
                      <span className="ml-2 text-sm text-gray-500">
                        Mystery
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-400 text-custom focus:ring-custom"
                      />
                      <span className="ml-2 text-sm text-gray-500">
                        Romance
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-gray-400">
                    Trending Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">
                      #adventure
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">
                      #magic
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">
                      #dystopian
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">
                      #thriller
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-gray-400">Sort By</h4>
                  <select className="w-full border-gray-300 rounded-md text-sm focus:ring-custom focus:border-custom">
                    <option>Most Popular</option>
                    <option>Latest</option>
                    <option>Most Discussed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-400">Stories</h2>
              <ExploreFeatureComponent />
            </div>
            <ExploreViewListComponent />
          </div>
        </div>
      </div>
      <div className="absolute top-[-200px] left-[250px] w-[800px] h-[350px] bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default ExploreComponent;
