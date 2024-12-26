import { Route, Routes } from 'react-router-dom';
import AnimalPage from '../pages/AnimalPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/animal" element={<AnimalPage />} />
    </Routes>
  );
};
export default AppRouter;
