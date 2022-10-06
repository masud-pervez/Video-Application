import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../features/Filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

export default function Search() {
  const { search } = useSelector((state) => state.filters);
  const [input, setInput] = useState(search);
  const dispatch = useDispatch();

  const match = useMatch("/");
  const navigate = useNavigate();
  console.log(match);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    setInput("");

    if (!match) {
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={({ target }) => setInput(target.value)}
        value={input}
      />
    </form>
  );
}
