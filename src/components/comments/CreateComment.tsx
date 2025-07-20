const CreateComment = () => {
  return (
    <form action="" className="p-2 flex gap-1">
      <input type="text" placeholder="Add a comment..." className="grow outline-none"/>
      <button className="p-1 px-2 bg-neutral text-neutral-content rounded-sm">Post</button>
    </form>
  );
};

export default CreateComment;