import "./thanks.css";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="container">
      <h2 className="title">Sua avaliação foi enviada com sucesso.</h2>
      <p className="p">
        Quer enviar outra avaliação?{" "}
        <Link className="decoration" to="/">
          <span className="link">Clique aqui</span>
        </Link>
      </p>
    </div>
  );
};

export default ThankYou;
