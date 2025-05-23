import React, { useState } from "react";

const Form = () => {
  const roles = ["user", "admin", "guest"];
  const [formData, setFormData] = useState({
    username: "",
    isSubscribed: false,
    role: "user",
  }); // => formData 안에 key/value 로 초기화

  const { username, isSubscribed, role } = formData;

  const handleChange = (e) => {
    // console.log("value : ", e.target.value);
    // console.log("name : ", e.target.name);
    // console.log("type : ", e.target.type);
    // console.log("checked : ", e.target.checked);

    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <p>
        Name : {username} {isSubscribed && " (Subscribed) "}
      </p>
      <p>Role : {role}</p>
      <p>
        Name :
        <input type="text" name="username" placeholder="username" onChange={handleChange} value={username} />
      </p>
      <input type="checkbox" name="isSubscribed" onChange={handleChange} value={isSubscribed} />
      <label>Subscribe</label>
      <div>
        <select name="role" onChange={handleChange} value={role}>
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
