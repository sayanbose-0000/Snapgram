import FileInput from "@/components/create/FileInput";

const CreatePage = () => {
  return (
    <form className="h-screen w-full mx-2 mb:w-xs flex justify-center items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mx-2">
        <legend className="fieldset-legend text-xl">Create post:</legend>

        <FileInput />

        <label className="input my-2">
          <span className="label">Caption:</span>
          <input type="text" placeholder="Your caption goes here..." />
        </label>
        <button className="btn btn-success my-2" type="submit">Create</button>
      </fieldset>
    </form>
  );
};

export default CreatePage;