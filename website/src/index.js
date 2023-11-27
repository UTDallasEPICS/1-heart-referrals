import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './components/context/AuthProvider';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//     <React.StrictMode>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );