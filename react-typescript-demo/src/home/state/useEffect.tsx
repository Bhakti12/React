import { useState, useEffect } from "react";

export const UseEffect = () => {
  const [resourceType, sourceResourceType] = useState("posts");
  const [items, setItems] = useState([])

  console.log("first render");

  useEffect(() => {
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => sourceResourceType("posts")}>Posts</button>
        <button onClick={() => sourceResourceType("users")}>Users</button>
        <button onClick={() => sourceResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
};
