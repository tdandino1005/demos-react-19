// import React from "react";
import PropTypes from "prop-types";

// Export a function component
export default function UserCard({ user }) {
  return (
    <figure className="rounded border p-4">
      <img src={user.picture?.thumbnail} alt="" className="rounded" />
      <figcaption>
        <h3>
          {user.name.title} {user.name.first} {user.name.last}
        </h3>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </figcaption>
    </figure>
  );
}

// Define the props that this component accepts
UserCard.propTypes = {
  //  user: PropTypes.object.isRequired
  user: PropTypes.shape({
    name: PropTypes.shape({
      title: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
