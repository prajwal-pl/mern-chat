interface CheckboxProps {
  onCheckboxChange: Function;
  selectedGender: string;
}

const GenderBox = ({ onCheckboxChange, selectedGender }: CheckboxProps) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderBox;
