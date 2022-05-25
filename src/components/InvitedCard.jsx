import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const InvitedCard = ({ info }) => {
  return (
    <React.Fragment key={info[0].user.id.value}>
      <div className="Card">
        <img
          src={info[0].user.picture.large}
          alt="invited person"
          className="Card__Image"
          draggable={false}
        />
        <div>
          <p className="Card__Name">{`${info[0].user.name.first} ${info[0].user.name.last}`}</p>
          <p className="Card__Age">{info[0].user.dob.age} years</p>
          <button
            className="Card__Button"
            onClick={() => {
              info[0].handleDelete(
                `${info[0].user.name.first} ${info[0].user.name.last}`
              );
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

InvitedCard.defaultProps = {
  name: 'Not Found',
  age: 0,
  url: 'https://via.placeholder.com/150',
};

export default InvitedCard;
