import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <div className="wrap">
        <ContactForm />
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </>
  );
};
