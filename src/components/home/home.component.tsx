import FeatureComponent from "./feature/feature.component";
import LatestPostsComponent from "./latest_posts/latest_posts.component";
import FeatureProfileComponent from "./feature_profile/feature_profile.component";
import TrendingTopicComponent from "./trending_topic/trending_topic.component";
import RecommendedWritersComponent from "./recommended_writers/recommended_writers.component";
import ResourceComponent from "./resources/resources.component";
import PricingComponent from "./pricing/pricing.component";
import WriterFeedbackComponent from "./writer_feedback/writer_feedback.component";
import StartWritingComponent from "./start_writing/start_writing.component";

const HomeComponent = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-8 px-5 mb-10">
        <div className="col-span-12 lg:col-span-8">
          <FeatureComponent />
          <LatestPostsComponent />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="sticky top-24">
            <FeatureProfileComponent />
            <TrendingTopicComponent />
            <RecommendedWritersComponent />
          </div>
        </div>
      </div>
      <ResourceComponent />
      <WriterFeedbackComponent />
      <PricingComponent />
      <StartWritingComponent />
    </>
  );
};

export default HomeComponent;
