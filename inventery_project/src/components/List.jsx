// lis
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, setEditValue } from "../features/inventorySlice";

const List = () => {
  const products = useSelector((state) => state.inventory.products);

  const dispatch = useDispatch();

  const [productQuery, setProductQuery] = useState({
    search: "",
    sort: "asc",
  });

  const filterProducts = products.filter((p) =>
    p.name.toLowerCase().includes(productQuery.search.toLowerCase()),
  );

  const sortList = [...filterProducts].sort((a, b) => {
    if (productQuery.sort === "Ascending") {
      return a.id - b.id;
    }
    if (productQuery.sort === "Descending") {
      return b.id - a.id;
    }
    if (productQuery.sort === "PriceAscending") {
      return Number(a.price) - Number(b.price);
    }
    if (productQuery.sort === "PriceDescending") {
      return Number(b.price) - Number(a.price);
    }
    if (productQuery.sort === "QuantityAscending") {
      return Number(a.qty) - Number(b.qty);
    }
    if (productQuery.sort === "Quantitydescending") {
      return Number(b.qty) - Number(a.qty);
    }
  });

  const handelChange = (field, e) => {
    setProductQuery((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handelReset = () => {
    setProductQuery({
      search: "",
      sort: "asc",
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Products name"
        value={productQuery.search}
        onChange={(e) => handelChange("search", e)}
      />

      <select
        value={productQuery.sort}
        onChange={(e) => handelChange("sort", e)}
      >
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
        <option value="PriceAscending">Price Ascending</option>
        <option value="PriceDescending">Price Descending</option>
        <option value="QuantityAscending">Quantity Ascending</option>
        <option value="Quantitydescending">Quantity descending</option>
      </select>
      <br />
      <br />
      <button onClick={handelReset}>resett</button>
      <br />
      <br />
      <table border={2}>
        <thead>
          <tr>
            <th>sr</th>
            <th>name</th>
            <th>qty</th>
            <th>price</th>
            <th>category</th>
            <th colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody>
          {sortList.map((l, index) => {
            return (
              <tr key={l.id}>
                <td>{index + 1}</td>
                <td>{l.name}</td>
                <td>{l.qty}</td>
                <td>{l.price}</td>
                <td>{l.category}</td>
                <td>
                  <button onClick={() => dispatch(deleteProduct(l.id))}>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => dispatch(setEditValue(l.id))}>
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;
