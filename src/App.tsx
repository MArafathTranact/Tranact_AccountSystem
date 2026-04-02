import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import { MainDashboard } from './pages/MainDashboard';
import { Settings } from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login'

// // A simple Dashboard placeholder for now
// const Dashboard = () => (
//   <div className="p-8">
//     <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
//     <p className="text-slate-600">You are successfully logged in.</p>
//   </div>
// );

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Default route shows Login */}
//         <Route path="/login" element={<Login />} />
        
//         {/* Dashboard route */}
//         <Route path="/dashboard" element={<Dashboard />} />

//         {/* Redirect any unknown path to login */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;