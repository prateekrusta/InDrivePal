import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import RootLayout from './layout/RootLayout.js';

import Feature1 from './components/onboarding/feature1.js';
import Feature2 from './components/onboarding/feature2.js';
import Feature3 from './components/onboarding/feature3.js';
import Feature4 from './components/onboarding/feature4.js';

import Onboarding1 from './components/onboarding/onboarding1.js';
import Onboarding2 from './components/onboarding/onboarding2.js';
import Onboarding3 from './components/onboarding/onboarding3.js';
import Onboarding4 from "./components/onboarding/phone-no.js";
import Onboarding5 from "./components/onboarding/locationCheck.js";
import Onboarding6 from "./components/onboarding/welcome.js";

import Login from './components/auth/login.js';
import './assets/css/App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes path="/" >
              <Route index path="/" element={<Feature1 />} />
              <Route path="info-2" element={<Feature2 />} />
              <Route path="info-3" element={<Feature3 />} />
              <Route path="info-4" element={<Feature4 />} />

            <Route path="login">
              <Route index element={<Login />} />
            </Route>
            
            <Route path="onboarding">
              <Route index path="page-1" element={<Onboarding1 />} />
              <Route path="page-2" element={<Onboarding2 />} />
              <Route path="page-3" element={<Onboarding3 />} />
              <Route path="page-4" element={<Onboarding4 />} />
              <Route path="page-5" element={<Onboarding5 />} />
              <Route path="page-6" element={<Onboarding6 />} />

            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
