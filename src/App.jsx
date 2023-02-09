import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import ContactsPage from 'page/ContactsPage';

export default function App() {
  return (
    <>
      <ContactsPage />;
      <ToastContainer />
    </>
  );
}
