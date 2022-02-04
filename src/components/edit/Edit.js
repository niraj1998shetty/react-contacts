import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "../create/create.module.css";
const Edit = (props) => {
  const location = useLocation();
  const user = location.state;
  console.log(user);
  const { id, name, email, address, phone, gender } = user;
  const [state, setState] = useState({
    id: id,
    name: name,
    email: email,
    address: address,
    phone: phone,
    gender: gender,
  });

  console.log(state.name);
  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    console.log(state);

    props.updateContactHandler(state);
    console.log("bvc");
    navigate(`/contact/${id}`,{state:state});
  };

  return (
    <div>
      <div className={style.input_content}>
        <form onSubmit={update} style={{ width: "100%" }}>
          <div>
            <input
              className={style.input}
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setState({ ...state, name: e.target.value });
              }}
              value={state.name}
            />
          </div>
          <div>
            <input
              className={style.input}
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setState({ ...state, email: e.target.value })}
              value={state.email}
            />
          </div>
          <div>
            <input
              className={style.input}
              type="text"
              name="address"
              placeholder="address"
              onChange={(e) => setState({ ...state, address: e.target.value })}
              value={state.address}
            />
          </div>
          <div>
            <input
              className={style.input}
              type="text"
              name="phone"
              placeholder="phone number"
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              value={state.phone}
            />
          </div>
          <div>
            <select
              className={style.select}
              onChange={(e) => setState({ ...state, gender: e.target.value })}
              name="gender"
              id="gender"
            >
              <option value="hide">--Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={style.button_content}>
            <button className={style.button}>UPDATE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
