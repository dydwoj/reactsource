import React, { useState } from "react";

const Form = () => {
  const roles = ["user", "admin", "guest"];
  const [formData, setFormData] = useState({
    username: "",
    isSubscribed: false,
    role: "user",
  }); // => formData 안에 key/value 로 초기화

  const { username, isSubscribed, role } = formData;

  return (
    <div>
      <p>
        Name : {username} ({isSubscribed && " (Subscribed) "})
      </p>
      <p>Role : {role}</p>
      <p>
        Name :
        <input type="text" name="username" placeholder="username" />
      </p>
      <input type="checkbox" name="isSubscribed" />
      <label>Subscribe</label>
      <div>
        <select name="role">
          {roles.map((role, idx) => (
            <option key={idx} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Form;
