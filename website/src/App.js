import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Sidebar from './components/Sidebar';
import { AssistanceRequests, AssistanceAction, Closed, Processed } from './components/pages/AssistanceRequests';
import { InboundReferrals, InboundAction, InReview } from './components/pages/InboundReferrals';
import { InternalCases, OpenCase, ClosedCase, AllCase } from './components/pages/InternalCases';
import { OutboundReferrals,OutDrafts, OutRejected, OutRecalled, OutActions, OutReview, OutClosed, OutAll } from './components/pages/OutboundReferrals';
import { ExternalCases, ExOpenCase, ExClosedCase, ExAllCase } from './components/pages/ExternalCases';
import { OutOfNetworkCasesCases, OutOpenCase, OutClosedCase, OutAllCase } from './components/pages/OutOfNetwrokCases';
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUpPage from './components/pages/SignUpPage';
import ForgotPage from './components/pages/ForgotPage';
import { Register } from './components/pages/Register';
import { Loginn } from './components/pages/Loginn';

function defaultPage(Comp) {
  return(
    <>
      <Navbar/>
      <Comp/>
    </>
  )
}
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/login' exact Component={LoginPage}/> */}

          <Route path='/' exact element={defaultPage(Home)} />
          {/* <Route path='/services'  /> */}
          {/* <Route path='/products'  /> */}
          {/* <Route path='/login/forgot'  exact Component={ForgotPage}/> */}
          {/* <Route path='/sign-up' exact Component={SignUpPage}/> */}


          {/* <Route path='/Sidebar/register' exact Component={Register}/>  */}
          <Route path='/login' exact Component={Loginn}/>
          <Route path='/register' exact Component={Register}/>

          <Route path='/Sidebar' exact Component={Sidebar}>

            <Route path='/Sidebar/inboundReferrals' exact element={<InboundReferrals/>} />
              <Route path='/Sidebar/inboundReferrals/inboundAction' exact element={InboundAction} />
              <Route path='/Sidebar/inboundReferrals/inReview' exact element={InReview} />

            <Route path='/Sidebar/assistanceRequests' exact element={<AssistanceRequests/>} />
              <Route path='/Sidebar/assistanceRequests/AssistanceAction' exact element={AssistanceAction} />
              <Route path='/Sidebar/assistanceRequests/closed' exact element={Closed} />
              <Route path='/Sidebar/assistanceRequests/processed' exact element={Processed} />

            <Route path='/Sidebar/internalCases' exact element={<InternalCases/>} />
              <Route path='/Sidebar/internalCases/Open' exact element={OpenCase} />
              <Route path='/Sidebar/internalCases/Closed' exact element={ClosedCase} />
              <Route path='/Sidebar/internalCases/All' exact element={AllCase} />

              <Route path='/Sidebar/outbound' exact element={<OutboundReferrals/>} />
              <Route path='/Sidebar/outbound/drafts' exact element={OutDrafts} />
              <Route path='/Sidebar/outbound/rejected' exact element={OutRejected} />
              <Route path='/Sidebar/outbound/recalled' exact element={OutRecalled} />
              <Route path='/Sidebar/outbound/needActions' exact element={OutActions} />
              <Route path='/Sidebar/outbound/inReview' exact element={OutReview} />
              <Route path='/Sidebar/outbound/closed' exact element={OutClosed} />
              <Route path='/Sidebar/outbound/all' exact element={OutAll} />

            
              <Route path='/Sidebar/externalCases' exact element={<ExternalCases/>} />
              <Route path='/Sidebar/externalCases/externalOpen' exact element={ExOpenCase} />
              <Route path='/Sidebar/externalCases/externalClosed' exact element={ExClosedCase} />
              <Route path='/Sidebar/externalCases/externalAll' exact element={ExAllCase} />

              <Route path='/Sidebar/outOfNetworkCases' exact element={<OutOfNetworkCasesCases/>} />
              <Route path='/Sidebar/outOfNetworkCases/outOpen' exact element={OutOpenCase} />
              <Route path='/Sidebar/outOfNetworkCases/outClosed' exact element={OutClosedCase} />
              <Route path='/Sidebar/outOfNetworkCases/outAll' exact element={OutAllCase} />

          </Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
