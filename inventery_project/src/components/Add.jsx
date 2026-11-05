import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../features/inventorySlice";

const Add = () => {
  const [input, setInput] = useState({
    name: "",
    qty: "",
    price: "",
    category: "",
  });

  const { editVal } = useSelector((state) => state.inventory);

  useEffect(() => {
    editVal ? setInput(editVal) : null;
  }, [editVal]);

  const dispatch = useDispatch();

  const handelChange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!input.name || !input.price || !input.category) {
      return alert("All Data Required");
    }
    if (editVal) {
      dispatch(update({ ...input, id: editVal.id }));
    } else {
      dispatch(add(input));
      setInput({
        name: "",
        qty: "",
        price: "",
        category: "",
      });
    }
  };

  console.log("input", input);

  return (
    <>
      <h1>inventory form</h1>
      <form onSubmit={handelSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="enter name"
          value={input.name}
          onChange={(e) => handelChange("name", e)}
        />
        <br />
        <br />
        <label htmlFor="Qty">Qty</label>
        <input
          type="number"
          placeholder="enter qty"
          value={input.qty}
          onChange={(e) => handelChange("qty", e)}
        />
        <br />
        <br />
        <label htmlFor="Price">Price</label>
        <input
          type="number"
          placeholder="enter Price"
          value={input.price}
          onChange={(e) => handelChange("price", e)}
        />
        <br />
        <br />
        <label htmlFor="category">category</label>
        <input
          type="text"
          placeholder="enter category"
          value={input.category}
          onChange={(e) => handelChange("category", e)}
        />
        <br />
        <br />
        <button type="submit">{editVal ? "Update" : "Add"}</button>
        <br />
        <br />
      </form>
    </>
  );
};

export default Add;
