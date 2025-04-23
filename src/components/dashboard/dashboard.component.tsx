import { useGetDashboardAnalysisQuery } from "../../redux/apis/analysis.api";
import TopicsChart from "../chart/dashboard/bar_chart";
import SubscriptionChart from "../chart/dashboard/doughnut_chart";
import PostsPerMonthChart from "../chart/dashboard/line_chart";
import UsersPieChart from "../chart/dashboard/pai_chart";
import LoadingAnimation from "../loading/loading.component";
import DashboardAnalysisHeader from "./dashboard_analysis_header";

const DashboardComponent = () => {
  const { data, isLoading } = useGetDashboardAnalysisQuery(undefined);

  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div>
      {/* <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-3">Users</h2>
          <div className="space-y-1 text-sm text-gray-700">
            <p>
              Total: <span className="font-medium">{data.users.total}</span>
            </p>
            <p>
              Active: <span className="font-medium">{data.users.active}</span>
            </p>
            <p>
              Inactive:{" "}
              <span className="font-medium">{data.users.inactive}</span>
            </p>
            <p>
              Blocked: <span className="font-medium">{data.users.blocked}</span>
            </p>
            <p>
              Writers: <span className="font-medium">{data.users.writers}</span>
            </p>
            <p>
              Apply for Writer:{" "}
              <span className="font-medium">{data.users.applyForWriter}</span>
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-3">Subscriptions</h2>
          <div className="space-y-1 text-sm text-gray-700">
            <p>
              Free:{" "}
              <span className="font-medium">{data.subscriptionTypes.free}</span>
            </p>
            <p>
              Pro:{" "}
              <span className="font-medium">{data.subscriptionTypes.pro}</span>
            </p>
            <p>
              Premium:{" "}
              <span className="font-medium">
                {data.subscriptionTypes.premium}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-3">Posts</h2>
          <div className="space-y-1 text-sm text-gray-700">
            <p>
              Total: <span className="font-medium">{data.posts.total}</span>
            </p>
            <p>
              Published:{" "}
              <span className="font-medium">{data.posts.published}</span>
            </p>
            <p>
              Featured:{" "}
              <span className="font-medium">{data.posts.featured}</span>
            </p>
          </div>
        </div>
      </div> */}

      <DashboardAnalysisHeader data={data} />

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
          <UsersPieChart data={data.users} />
          <SubscriptionChart data={data.subscriptionTypes} />
          <PostsPerMonthChart perMonth={data.posts.perMonth} />
          <TopicsChart topics={data.posts.topics} />
        </div>
      )}
    </div>
  );
};

export default DashboardComponent;
