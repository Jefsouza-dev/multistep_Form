import "./thanks.css";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante para nós</p>
      <p id="lastP">
        Para concluir sua avaliação, clique no botão ENVIAR abaixo
      </p>
      <h3>
        Obrigado por nos avaliar, {data.name}. Aqui está o resumo da avaliação:{" "}
      </h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário: {data.comment}</span>
      </p>
    </div>
  );
};

export default Thanks;
