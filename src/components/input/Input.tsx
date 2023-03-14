function Input() {
  return (
    <div className='w-full max-w-xl flex px-5 py-3 items-center rounded-md bg-white relative bottom-24'>
      <div className="h-5 w-5 border rounded-full"></div>
      <input className="ml-3 max-w-[80%]" placeholder="Create new todo..." ></input>
    </div>
  );
}

export default Input;
