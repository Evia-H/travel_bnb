const SubmitForm = async () => {
  "use server";
  console.log("creating user...");
};

function FormPage() {
  return (
    <form action={SubmitForm} className={formStyle}>
      <h2 className="text-2xl mb-4">Create User</h2>
      <input
        type="text"
        name="firstName"
        defaultValue={"Adam"}
        required
        className={inputStyle}
      />
      <input
        type="text"
        name="lastName"
        defaultValue={"Kadmon"}
        required
        className={inputStyle}
      />
      <button type="submit" className={btnStyle}>
        Submit
      </button>
    </form>
  );
}

export default FormPage;

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";
