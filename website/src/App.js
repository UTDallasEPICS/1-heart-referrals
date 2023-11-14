import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Sidebar from './components/Sidebar';
import { AssistanceRequests, AssistanceAction, Closed, Processed } from './components/pages/AssistanceRequests';
import { InboundReferrals, InboundAction, InReview } from './components/pages/InboundReferrals';
import { InternalCases, OpenCase, ClosedCase, AllCase } from './components/pages/InternalCases';
import { OutboundReferrals, OutDrafts, OutRejected, OutRecalled, OutActions, OutReview, OutClosed, OutAll } from './components/pages/OutboundReferrals';
import { ExternalCases, ExOpenCase, ExClosedCase, ExAllCase } from './components/pages/ExternalCases';
import { OutOfNetworkCasesCases, OutOpenCase, OutClosedCase, OutAllCase } from './components/pages/OutOfNetwrokCases';
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/pages/SignUpPage';
import ForgotPage from './components/pages/ForgotPage';

function defaultPage(Comp) {
  return (
    <>
      <Navbar />
      <Comp />
    </>
  )
}
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' exact Component={LoginPage} />

          <Route path='/' exact element={defaultPage(Home)} />
          <Route path='/login/forgot' exact Component={ForgotPage} />
          <Route path='/sign-up' exact Component={SignUpPage} />
        </Routes>

        <Sidebar>
        <Routes>
          <Route path='/inboundReferrals' exact element={<InboundReferrals/>} />
          <Route path='/inboundReferrals/inboundAction' exact element={<InboundAction/>} />
          <Route path='/inboundReferrals/inReview' exact Component={InReview} />

          <Route path='/assistanceRequests' exact Component={AssistanceRequests} />
          <Route path='/assistanceRequests/AssistanceAction' exact Component={AssistanceAction} />
          <Route path='/assistanceRequests/closed' exact Component={Closed} />
          <Route path='/assistanceRequests/processed' exact Component={Processed} />

          <Route path='/internalCases' exact Component ={InternalCases } />
          <Route path='/internalCases/Open' exact Component ={OpenCase} />
          <Route path='/internalCases/Closed' exact Component ={ClosedCase} />
          <Route path='/internalCases/All' exact Component ={AllCase} />

          <Route path='/outbound' exact Component ={OutboundReferrals } />
          <Route path='/outbound/drafts' exact Component ={OutDrafts} />
          <Route path='/outbound/rejected' exact Component ={OutRejected} />
          <Route path='/outbound/recalled' exact Component ={OutRecalled} />
          <Route path='/outbound/needActions' exact Component ={OutActions} />
          <Route path='/outbound/inReview' exact Component ={OutReview} />
          <Route path='/outbound/closed' exact Component ={OutClosed} />
          <Route path='/outbound/all' exact Component ={OutAll} />


          <Route path='/externalCases' exact Component ={ExternalCases } />
          <Route path='/externalCases/externalOpen' exact Component ={ExOpenCase} />
          <Route path='/externalCases/externalClosed' exact Component ={ExClosedCase} />
          <Route path='/externalCases/externalAll' exact Component ={ExAllCase} />

          <Route path='/outOfNetworkCases' exact Component ={OutOfNetworkCasesCases } />
          <Route path='/outOfNetworkCases/outOpen' exact Component ={OutOpenCase} />
          <Route path='/outOfNetworkCases/outClosed' exact Component ={OutClosedCase} />
          <Route path='/outOfNetworkCases/outAll' exact Component ={OutAllCase} />

        </Routes>
      </Sidebar>
      </Router >

    </>
  );
}

export default App;
