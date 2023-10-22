import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { ContactForm } from '../components/ContactForm/ContactForm.jsx';
import { ContactList } from '../components/ContactList/ContactList.jsx';
import { Filter } from '../components/Filter/Filter.jsx';
const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <ContactList />
      <Filter />
    </div>
  );
};
export default Contacts;
