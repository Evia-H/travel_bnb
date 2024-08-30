import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

const createProfileAction = async (formData: FormData) => {
  "use server";

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  console.log(firstName);
};

function CreateProfilePage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold m-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <form action={createProfileAction}>
          <FormInput name="firstName" type="text" label="First Name" />
          <FormInput name="lastName" type="text" label="Last Name" />
          <SubmitButton text="Create New User" />
        </form>
      </div>
    </section>
  );
}
export default CreateProfilePage;
