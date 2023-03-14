import Moon from "./../../images/icon-moon.svg";

function Title() {
    return (
      <div className='flex justify-between items-center'>
        <h1 className="text-white text-xl font-bold tracking-[0.5rem]">TODO</h1>
        <button className="w-5 h-5"><img src={Moon}/></button>
      </div>
    );
  }
  
  export default Title;
  