import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { CREATE_USER } from '../Graphql/Mutation';

function CreateUser() {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
    const [cretaeUser, { error }] = useMutation(CREATE_USER);

  return (
    <div className="createUser">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            cretaeUser({
              variables: { name: name, username: userName, password: password },
            });
          }}
        >
          Create User
        </button>
      </div>
  )
}

export default CreateUser