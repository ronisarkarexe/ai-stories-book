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
        </Route>
        <Route path="/stories" element={<StoriesComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
