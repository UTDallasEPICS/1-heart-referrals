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
          <Route path='./inboundReferrals' exact component={InboundReferrals} />
          <Route path='/inboundReferrals/inboundAction' exact component={InboundAction} />
          <Route path='/inboundReferrals/inReview' exact component={InReview} />

          
          <Route path='/assistanceRequests' exact component={AssistanceRequests} />
          <Route path='/assistanceRequests/assistanceAction'  exact component={AssistanceAction}/>
          <Route path='/assistanceRequests/closed' exact component={Closed} />
          <Route path='/assistanceRequests/processed' exact component={Processed} />

          <Route path='/internalCases' exact component ={InternalCases } />
          <Route path='/internalCases/Open' exact component ={OpenCase} />
          <Route path='/internalCases/Closed' exact component ={ClosedCase} />
          <Route path='/internalCases/All' exact component ={AllCase} />

          <Route path='/outbound' exact component ={OutboundReferrals } />
          <Route path='/outbound/drafts' exact component ={OutDrafts} />
          <Route path='/outbound/rejected' exact component ={OutRejected} />
          <Route path='/outbound/recalled' exact component ={OutRecalled} />
          <Route path='/outbound/needActions' exact component ={OutActions} />
          <Route path='/outbound/inReview' exact component ={OutReview} />
          <Route path='/outbound/closed' exact component ={OutClosed} />
          <Route path='/outbound/all' exact component ={OutAll} />


          <Route path='/externalCases' exact component ={ExternalCases } />
          <Route path='/externalCases/externalOpen' exact component ={ExOpenCase} />
          <Route path='/externalCases/externalClosed' exact component ={ExClosedCase} />
          <Route path='/externalCases/externalAll' exact component ={ExAllCase} />

          <Route path='/outOfNetworkCases' exact component ={OutOfNetworkCasesCases } />
          <Route path='/outOfNetworkCases/outOpen' exact component ={OutOpenCase} />
          <Route path='/outOfNetworkCases/outClosed' exact component ={OutClosedCase} />
          <Route path='/outOfNetworkCases/outAll' exact component ={OutAllCase} />

        </Routes>
      </Sidebar>
      </Router >

    </>
  );
}

export default App;
