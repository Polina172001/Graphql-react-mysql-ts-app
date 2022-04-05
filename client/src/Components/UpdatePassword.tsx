import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutation";

function UpdatePassword() {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Current password..."
        onChange={(e) => {
          setCurrentPassword(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="New password..."
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
      />

      <button
        onClick={() => {
          updatePassword({
            variables: {
              username: username,
              oldPassword: currentPassword,
              newPassword: newPassword,
            },
          });
        }}
      >
        Update Password
      </button>
    </div>
  );
}

export default UpdatePassword;
