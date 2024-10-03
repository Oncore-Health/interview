import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';

function App() {
  const Layout = ({ children }) => {

    return (
      <div className="App flex">

      {/* Content area */}
      <div className="content flex-grow">
        {children}
      </div>
    </div>
    );
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Layout>
  );
}

export default App;