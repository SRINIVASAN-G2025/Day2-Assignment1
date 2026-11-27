import "./symbolOfExcellence.css";
const Symbol = (props) => {
  return (
    <div className="parent">
      <div className="element">
        <h1 className="heading">{props?.data?.title}</h1>
        <br />
        <br />
        <p className="para">{props?.data.subtitle}</p>
        <br />
      </div>
    </div>
  );
};

export default Symbol;
