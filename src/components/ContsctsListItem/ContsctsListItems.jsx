import { useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { deleteContact } from 'redux/contacts/contacts.operations';
import { BsTrash } from 'react-icons/bs';

export default function ContactListItem({ name, number, id }) {
  const [deleting, setDeleting] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setDeleting(true);

    toast.promise(dispatch(deleteContact(id)), {
      pending: `Deleting ${name}`,
      success: `Delete ${name}`,
      error: `${name} not deleted`,
    });
  };

  return (
    <tr>
      <td className="text-start">
        <b className="mb-0">{name}:</b>
      </td>
      <td className="text-start">
        <p className="mb-0">{number}</p>
      </td>
      <td className="text-end">
        <Button
          variant="dark"
          type="button"
          onClick={handleClick}
          disabled={deleting}
        >
          <BsTrash />
        </Button>
      </td>
    </tr>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
