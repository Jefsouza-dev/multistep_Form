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
            value="unsatisfied"
            name="review"
            required
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateDataHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            required
            checked={data.review === "neutral"}
            onChange={(e) => updateDataHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
            required
            checked={data.review === "satisfied"}
            onChange={(e) => updateDataHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied"
            name="review"
            required
            checked={data.review === "very_satisfied"}
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
          value={data.comment}
          onChange={(e) => updateDataHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
