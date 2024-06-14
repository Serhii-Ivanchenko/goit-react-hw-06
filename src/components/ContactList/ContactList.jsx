import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

export default function ContactList() {
  const items = useSelector(state => state.contacts.items )
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
}
