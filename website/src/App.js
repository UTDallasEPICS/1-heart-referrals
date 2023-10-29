import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Sidebar from './components/Sidebar';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './components/pages/Reports';
import { AssistanceRequests, AssistanceAction, Closed, Processed } from './components/pages/AssistanceRequests';
import { InboundReferrals, InboundAction, InReview } from './components/pages/InboundReferrals';
import { InternalCases, OpenCase, ClosedCase, AllCase } from './components/pages/InternalCases';
import { OutboundReferrals,OutDrafts, OutRejected, OutRecalled, OutActions, OutReview, OutClosed, OutAll } from './components/pages/OutboundReferrals';
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUpPage from './components/pages/SignUpPage';
import ForgotPage from './components/pages/ForgotPage';

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
          <Route path='/login' exact Component={LoginPage}/>
          <Route path='/' exact element={defaultPage(Home)} />
          <Route path='/services'  />
          <Route path='/products'  />
          <Route path='/login/forgot'  exact Component={ForgotPage}/>
          <Route path='/sign-up' exact Component={SignUpPage}/>
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
              <Route path='/Sidebar/internalCases/Close' exact element={ClosedCase} />
              <Route path='/Sidebar/internalCases/All' exact element={AllCase} />

              <Route path='/Sidebar/outbound' exact element={<OutboundReferrals/>} />
              <Route path='/Sidebar/outbound/drafts' exact element={OutDrafts} />
              <Route path='/Sidebar/outbound/rejected' exact element={OutRejected} />
              <Route path='/Sidebar/outbound/recalled' exact element={OutRecalled} />
              <Route path='/Sidebar/outbound/needActions' exact element={OutActions} />
              <Route path='/Sidebar/outbound/inReview' exact element={OutReview} />
              <Route path='/Sidebar/outbound/closed' exact element={OutClosed} />
              <Route path='/Sidebar/outbound/all' exact element={OutAll} />

            

            

            <Route path='/Sidebar/reports' exact element={<Reports/>} />
              <Route path='/Sidebar/reports/reports1'  exact element={ReportsOne} />
              <Route path='/Sidebar/reports/reports2'  exact element={ReportsTwo} />
              <Route path='/Sidebar/reports/reports3'  exact element={ReportsThree} />
          </Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
