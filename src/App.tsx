import { JSX } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import ExploreComponent from "./components/post/post.component";
import PostDetailsComponent from "./components/post/post.details.component";
import { getUserInfo } from "./services/auth.service";
import UserListComponent from "./components/dashboard/users/user.list.component";
import NotFoundComponent from "./components/not-found.component";

const ProtectedRoute = ({
  element,
  allowedRoles,
}: {
  element: JSX.Element;
  allowedRoles: string[];
}) => {
  const user = getUserInfo();
  console.log("user role: " + user?.role);
  return allowedRoles.includes(user?.role || "") ? (
    element
  ) : (
    <Navigate to="/dashboard" />
  );
};

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

        {/* <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardComponent />} />
          <Route path="components" element={<ComponentsComponent />} />
          <Route path="settings" element={<SettingComponent />} />
          <Route path="users" element={<UserComponent />} />
          <Route path="writers" element={<WriterApplicationComponent />} />
        </Route> */}

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardComponent />} />
          <Route
            path="components"
            element={
              <ProtectedRoute
                element={<ComponentsComponent />}
                allowedRoles={["user", "admin"]}
              />
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute
                element={<SettingComponent />}
                allowedRoles={["user", "admin"]}
              />
            }
          />
          <Route
            path="users"
            element={
              <ProtectedRoute
                element={<UserComponent />}
                allowedRoles={["user", "admin"]}
              />
            }
          >
            <Route index element={<UserComponent />} />
            <Route path="list" element={<UserListComponent />} />
          </Route>
          <Route
            path="writers"
            element={
              <ProtectedRoute
                element={<WriterApplicationComponent />}
                allowedRoles={["admin", "editor"]}
              />
            }
          />
        </Route>

        <Route path="/stories" element={<StoriesComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/pricing" element={<PricingComponent />} />
        <Route path="/explore" element={<ExploreComponent />} />
        <Route path="/post/:id" element={<PostDetailsComponent />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
