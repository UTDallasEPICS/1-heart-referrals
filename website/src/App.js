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

function App() {

  return (
    <Router >
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/login' Component={LoginPage} />

        <Route path='/' exact Component={Home} />
        <Route path='/login/forgot' exact Component={ForgotPage} />
        <Route path='/sign-up' exact Component={SignUpPage} />


        <Route path='/inboundReferrals' exact />
        <Route path='/inboundReferrals/inboundAction' exact Component={InboundAction} />
        <Route path='/inboundReferrals/inReview' exact Component={InReview} />


        <Route path='/assistanceRequests' exact />
        <Route path='/assistanceRequests/assistanceAction' exact Component={AssistanceAction} />
        <Route path='/assistanceRequests/closed' exact Component={Closed} />
        <Route path='/assistanceRequests/processed' exact Component={Processed} />

        <Route path='/internalCases' exact />
        <Route path='/internalCases/Open' exact Component={OpenCase} />
        <Route path='/internalCases/Closed' exact Component={ClosedCase} />
        <Route path='/internalCases/All' exact Component={AllCase} />

        <Route path='/outbound' exact />
        <Route path='/outbound/drafts' exact Component={OutDrafts} />
        <Route path='/outbound/rejected' exact Component={OutRejected} />
        <Route path='/outbound/recalled' exact Component={OutRecalled} />
        <Route path='/outbound/needActions' exact Component={OutActions} />
        <Route path='/outbound/inReview' exact Component={OutReview} />
        <Route path='/outbound/closed' exact Component={OutClosed} />
        <Route path='/outbound/all' exact Component={OutAll} />


        <Route path='/externalCases' exact />
        <Route path='/externalCases/externalOpen' exact Component={ExOpenCase} />
        <Route path='/externalCases/externalClosed' exact Component={ExClosedCase} />
        <Route path='/externalCases/externalAll' exact Component={ExAllCase} />

        <Route path='/outOfNetworkCases' exact />
        <Route path='/outOfNetworkCases/outOpen' exact Component={OutOpenCase} />
        <Route path='/outOfNetworkCases/outClosed' exact Component={OutClosedCase} />
        <Route path='/outOfNetworkCases/outAll' exact Component={OutAllCase} />

      </Routes>
    </Router >
  );
}

export default App;