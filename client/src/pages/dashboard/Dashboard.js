import Form from "../../components/form/Form";

const Dashboard = (
  name,
  setName,
  model,
  setModel,
  year,
  setYear,
  price,
  setPrice
) => {
  return (
    <div>
      <Form
        name={name}
        setName={setName}
        model={model}
        setModel={setModel}
        year={year}
        setYear={setYear}
        price={price}
        setPrice={setPrice}
      />
    </div>
  );
};

export default Dashboard;
