import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();
  return (
    <div className="text-3xl font-semibold text-center text-white bg-lime-500">
      User : {userid}
    </div>
  );
};

export default User;
