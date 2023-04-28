import "./steps.css";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : null}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : null}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
