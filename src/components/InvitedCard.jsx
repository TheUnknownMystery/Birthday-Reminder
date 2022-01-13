import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const InvitedCard = ({ first_name, last_name, age, url, handleDelete, id }) => (
  <React.Fragment key={id}>
    <div className="Card">
      <img
        src={url}
        alt="invited person"
        className="Card__Image"
        draggable={false}
      />
      <div>
        <p className="Card__Name">{`${first_name} ${last_name}`}</p>
        <p className="Card__Age">{age} years</p>
        <button
          className="Card__Button"
          onClick={() => {
            handleDelete(`${first_name} ${last_name}`);
          }}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  </React.Fragment>
);

InvitedCard.defaultProps = {
  name: 'Not Found',
  age: 0,
  url: 'https://via.placeholder.com/150',
};

export default InvitedCard;
