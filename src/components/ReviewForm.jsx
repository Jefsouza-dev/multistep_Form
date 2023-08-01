import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./reviewForm.css";

const ReviewForm = ({ data, updateDataHandler }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            value="Insatisfeito"
            name="review"
            required
            checked={data.review === "Insatisfeito"}
            onChange={(e) => updateDataHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="Neutro"
            name="review"
            required
            checked={data.review === "Neutro"}
            onChange={(e) => updateDataHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="Satisfeito"
            name="review"
            required
            checked={data.review === "Satisfeito"}
            onChange={(e) => updateDataHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="Muito_satisfeito"
            name="review"
            required
            checked={data.review === "Muito_satisfeito"}
            onChange={(e) => updateDataHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito Satisfeito</p>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="comment" className="comment">
          Deixe seu comentário:
        </label>
        <textarea
          name="comment"
          id="comment"
          required
          value={data.comment}
          onChange={(e) => updateDataHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
