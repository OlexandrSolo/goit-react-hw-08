import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";

export default function Contact({ user }) {
  const dispatch = useDispatch();

  return (
    <>
      <span>{user.name}</span>
      <span>{user.number}</span>
      <button onClick={() => dispatch(deleteContact(user.id))}>Delete</button>
    </>
  );
}

Contact.propTypes = {
  user: PropTypes.object.isRequired,
};
