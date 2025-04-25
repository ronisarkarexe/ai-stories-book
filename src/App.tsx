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
import StoriesComponent from "./components/stories/stories.component";
import WriterApplicationComponent from "./components/dashboard/writers/writer_application.component";
import UserComponent from "./components/dashboard/users/user.component";
import PricingComponent from "./components/pricing/pricing.component";
import ExploreComponent from "./components/post/post.component";
import PostDetailsComponent from "./components/post/post.details.component";
import { getUserInfo } from "./services/auth.service";
import UserListComponent from "./components/dashboard/users/user.list.component";
import NotFoundComponent from "./components/not-found.component";
import EmailValidationComponent from "./components/email_validation/email.validation.component";
import { USER_ROLE } from "./constants/role";
import PostListsComponent from "./components/dashboard/posts/post_lists.component";
import ProfileComponent from "./components/dashboard/profile/profile.component";

const ProtectedRoute = ({
  element,
  allowedRoles,
}: {
  element: JSX.Element;
  allowedRoles: string[];
}) => {
  const user = getUserInfo();
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  return element;
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

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardComponent />} />
          <Route
            path="post-lists"
            element={
              <ProtectedRoute
                element={<PostListsComponent />}
                allowedRoles={[
                  USER_ROLE.USER,
                  USER_ROLE.ADMIN,
                  USER_ROLE.SUPER_ADMIN,
                  USER_ROLE.WRITER,
                ]}
              />
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute
                element={<SettingComponent />}
                allowedRoles={[USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN]}
              />
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute
                element={<ProfileComponent />}
                allowedRoles={[
                  USER_ROLE.USER,
                  USER_ROLE.ADMIN,
                  USER_ROLE.SUPER_ADMIN,
                  USER_ROLE.WRITER,
                ]}
              />
            }
          />
          <Route path="users">
            <Route
              index
              element={
                <ProtectedRoute
                  element={<UserComponent />}
                  allowedRoles={[
                    USER_ROLE.USER,
                    USER_ROLE.ADMIN,
                    USER_ROLE.SUPER_ADMIN,
                    USER_ROLE.WRITER,
                  ]}
                />
              }
            />
            <Route
              path="list"
              element={
                <ProtectedRoute
                  element={<UserListComponent />}
                  allowedRoles={[
                    USER_ROLE.USER,
                    USER_ROLE.ADMIN,
                    USER_ROLE.SUPER_ADMIN,
                    USER_ROLE.WRITER,
                  ]}
                />
              }
            />
          </Route>
          <Route
            path="writers"
            element={
              <ProtectedRoute
                element={<WriterApplicationComponent />}
                allowedRoles={[
                  USER_ROLE.WRITER,
                  USER_ROLE.ADMIN,
                  USER_ROLE.SUPER_ADMIN,
                  USER_ROLE.USER,
                ]}
              />
            }
          />
        </Route>

        <Route path="/stories" element={<StoriesComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route
          path="/auth/email-validation"
          element={<EmailValidationComponent />}
        />
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
