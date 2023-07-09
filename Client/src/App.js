import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from './layout/RootLayout.js';

import Navbar from './components/ride/navbar.js';

import Feature1 from './components/onboarding/feature1.js';
import Feature2 from './components/onboarding/feature2.js';
import Feature3 from './components/onboarding/feature3.js';
import Feature4 from './components/onboarding/feature4.js';

import Login from './components/auth/login.js';

import Onboarding1 from './components/onboarding/onboarding1.js';
import Onboarding2 from './components/onboarding/onboarding2.js';
import Onboarding3 from './components/onboarding/onboarding3.js';
import Onboarding4 from "./components/onboarding/phone-no.js";
import Otp from "./components/onboarding/otp.js";
import Onboarding5 from "./components/onboarding/locationCheck.js";
import Onboarding6 from "./components/onboarding/welcome.js";
import PassengerDriver from "./components/onboarding/passenger-driver.js";

import EmergencyContacts from "./components/onboarding/emergency.js";
import EmergencyAddContacts from "./components/onboarding/emergency-add-contact.js";
import ListEmergencyContacts from "./components/onboarding/list-emergency-contact.js";

import Bookride from "./components/ride/book-ride.js";
import MyModal from "./components/ride/modal1.js";
import FindDriver from "./components/ride/find-driver.js";
import RatedDriver from "./components/ride/rated-drivers.js";
import Modal from "./components/ride/modal2.js";

import ChatMsg from './components/chat/ChatMsg.js';
import AssistiveChat from './components/chat/assistive-chat.js'

import SOS from "./components/ride/SOS.js"

import './App.css';
import Waiting from "./components/ride/waiting.js";

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
              <Route path="otp" element={<Otp />} />
              <Route path="page-5" element={<Onboarding5 />} />
              <Route path="page-6" element={<Onboarding6 />} />
              <Route path="page-7" element={<PassengerDriver />} />
            </Route>

            <Route path="emergency">
            <Route index path="" element={<EmergencyContacts />} />
            <Route path="add-contact" element={<EmergencyAddContacts />} />
            <Route path="list-emergency-contact" element={<ListEmergencyContacts />} />
            </Route>

            <Route path="ride">
            <Route index path="" element={<Bookride />} />
            <Route path="pick-driver-suggestion" element={<MyModal />} />
            <Route path="find-driver" element={<FindDriver />} />
            <Route path="driver-rated" element={<RatedDriver />} />
            <Route path="coming-driver" element={<Modal />} />
            <Route path="waiting" element={<Waiting />} />
            <Route path="SOS" element={<SOS />} />

            </Route>
            
            <Route path="chat-app">
            <Route index path="" element={<ChatMsg />} />
            </Route>

            <Route path="assistive-chat">
            <Route index path="" element={<AssistiveChat />} />
            </Route>
            
            
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
