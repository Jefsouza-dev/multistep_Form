import "./thanks.css";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const emojiData = {
  Insatisfeito: <BsFillEmojiFrownFill />,
  Neutro: <BsFillEmojiNeutralFill />,
  Satisfeito: <BsFillEmojiSmileFill />,
  Muito_satisfeito: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  const name = data.name.split(" ")[0];

  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante para nós</p>
      <p id="lastP">
        Para concluir sua avaliação, clique no botão ENVIAR abaixo
      </p>
      <h3>
        Obrigado por nos avaliar, {name}. Aqui está o resumo da avaliação:{" "}
      </h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>{" "}
        {data.review === "Muito_satisfeito" ? "Muito satisfeito" : data.review}{" "}
        | {emojiData[data.review]}
      </p>

      <p className="review-data">
        <span>Comentário: {data.comment}</span>
      </p>
    </div>
  );
};

export default Thanks;
