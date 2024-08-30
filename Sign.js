import React from "react";
import { useState } from "react";
import Header from "./common/Header";
import "./sign.css";

const Sign = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createNewData = () => {
    const newData = {
      username: newUsername,
      password: newPassword,
    };

    setIsLoading(true);

    fetch("http://localhost:8080/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log("Data created successfully:", data);
        // Reset the form after successful creation
        setNewUsername("");
        setNewPassword("");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error and provide user feedback
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bd">
      <Header></Header>
      <div className="sn">
        <div className="un">
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="USERNAME"
          />
        </div>
        <div className="un">
          <input
            type="text"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="PASSWORD"
          />
        </div>
        <div className="submit">
          <button onClick={createNewData} disabled={isLoading}>
            {isLoading ? "Creating..." : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sign;
