import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="dark">
      <RouterProvider router={router} />
      <Toaster position="top-right" theme="dark" />
    </div>
  );
}
