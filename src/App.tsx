import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSectionComponent from "./components/hero/hero_section.component";
import HomeComponent from "./components/home/home.component";
import LoginComponent from "./components/login/login.component";
import SignUpComponent from "./components/signup/signup.component";
import DashboardComponent from "./components/dashboard/dashboard.component";
import RootLayout from "./components/layout/root_layout.component";
import DashboardLayout from "./components/dashboard/dashboard_layout.component";
import SettingComponent from "./components/dashboard/settings/settings.component";
import ComponentsComponent from "./components/dashboard/components/components.component";
import StoriesComponent from "./components/stories/stories.component";
import WriterApplicationComponent from "./components/dashboard/writers/writer_application.component";
import UserComponent from "./components/dashboard/users/user.component";
import PricingComponent from "./components/pricing/pricing.component";
import ExploreComponent from "./components/explore/explore.component";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <HeroSectionComponent />
              <HomeComponent />
            </RootLayout>
          }
        />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardComponent />} />
          <Route path="components" element={<ComponentsComponent />} />
          <Route path="settings" element={<SettingComponent />} />
          <Route path="users" element={<UserComponent />} />
          <Route path="writers" element={<WriterApplicationComponent />} />
        </Route>
        <Route path="/stories" element={<StoriesComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/pricing" element={<PricingComponent />} />
        <Route path="/explore" element={<ExploreComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
