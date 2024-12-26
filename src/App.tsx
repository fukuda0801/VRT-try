import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { AppThemeProvider } from './providers/AppThemeProvider';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <AppRouter />
      </AppThemeProvider>
    </BrowserRouter>
  );
};

export default App;
