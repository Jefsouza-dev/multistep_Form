import "./firstForm.css";

const FirstForm = ({ data, updateDataHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name" className="label">
          Nome:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name || ""}
          placeholder="Digite seu nome"
          required
          onChange={(e) => updateDataHandler("name", e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email || ""}
          placeholder="Digite seu e-mail"
          required
          onChange={(e) => updateDataHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default FirstForm;
