import Moon from "./../../images/icon-moon.svg";

function Title() {
    return (
      <div className='flex justify-between items-center'>
        <h1 className="text-white text-xl font-bold tracking-[0.5rem]">TODO</h1>
        <img className="w-5 h-5" src={Moon}/>
      </div>
    );
  }
  
  export default Title;
  