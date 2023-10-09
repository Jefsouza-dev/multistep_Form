import "./form.css";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import FirstForm from "../components/FirstForm";
import ReviewForm from "../components/ReviewForm";
import Thanks from "../components/Thanks";
import Steps from "../components/Steps";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";

const formData = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

const Form = () => {
  const [data, setData] = useState(formData);
  const navigate = useNavigate();

  const updateDataHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const send = () => {
    navigate("/thanks", { replace: true });
  };

  const formComponents = [
    <FirstForm data={data} updateDataHandler={updateDataHandler} />,
    <ReviewForm data={data} updateDataHandler={updateDataHandler} />,
    <Thanks data={data} />,
  ];
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, ultilize o formulário abaixo para
          avaliar o produto.
        </p>
      </div>

      <div className="form-container">
        <Steps currentStep={currentStep} />

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep ? (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            ) : null}

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button className="button" onClick={() => send()}>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
