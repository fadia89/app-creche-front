import { Routes, Route } from "react-router-dom";
import Register from "../pages/inscription/Register.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import About from "../pages/a-propos/About.jsx";
import ParentSpace from "../pages/espace_parent/ParentSpace.jsx";
import Profile from "../pages/espace_parent/Profile.jsx";
import Bear from "../pages/accueil/Bear.jsx";
import TittleBear from "../pages/accueil/TittleBear.jsx";
import EditProfile from "../pages/espace_parent/EditProfile.jsx";
import LegalNotices from "../components/layout/LegalNotices.jsx";
import Footer from "../components/layout/Footer.jsx";
import PrivacyPolicy from "../components/layout/PrivacyPolicy.jsx";
import PourquoiUneCreche from "../pages/pourquoi_une_creche/WhyADaycare.jsx";
import EducationalApproach from "../pages/nos services/EducationalApproach.jsx";
import Sleep from "../pages/nos services/Sleep.jsx";
import Adaptation from "../pages/nos services/Adaptation.jsx";
import Food from "../pages/nos services/Food.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Activities from '../pages/espace_parent/Activities.jsx';
import Cookies from "../components/layout/Cookies.jsx";
import Documents from "../pages/espace_parent/Documents.jsx";
import ProtectedRoute from "../utils/ProtectedRoute.jsx"
import AppAdmin from "../admin/AppAdmin.jsx";


const MyRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Bear />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<ParentSpace />} />
        <Route path="/ourson" element={<Bear />} />
        <Route path="/approche-pedagogique" element={<EducationalApproach />} />
        <Route path="/sommeil" element={<Sleep />} />
        <Route path="/adaptation" element={<Adaptation />} />
        <Route path="/alimentation" element={<Food />} />
        <Route path="/petit-ourson" element={<TittleBear />} />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/politique-Confidentialite" element={<PrivacyPolicy />} />
        <Route path="/politique-cookies" element={<Cookies />} />
        <Route path="/pourquoi-une-creche" element={<PourquoiUneCreche />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page introuvable</h1>} />

        {/* Routes protégées */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute role="admin">
              <AppAdmin />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default MyRouter;
