import React from "react";
import { FiCheckCircle } from "react-icons/fi";

import "./styles.css";

const SuccessMessage = () => {
  return (
    <div className="container">
      <FiCheckCircle size={64} color="#34CB79" />
      <h2>Cadastro concluído!</h2>
    </div>
  );
};

export default SuccessMessage;
