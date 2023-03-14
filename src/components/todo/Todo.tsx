import Close from "./../../images/icon-cross.svg";
import Check from "./../../images/icon-check.svg";

function Todo() {
    return (
      <div className='w-full max-w-xl flex px-5 py-3 items-center my-[1px] bg-white rounded-md'>
        <div className="h-5 w-5 border rounded-full relative bg-gradient-to-br from-[#55DDFF] to-[#C058F3]">
          <input type="checkbox" className="h-5 w-5 appearance-none"></input>
          <img className="w-2 h-2 absolute top-1/4 left-1/4" src={Check}/>
        </div>
        <div className="ml-3">Todo text</div>
        <button className="w-3 h-3 ml-auto"><img src={Close}/></button>
      </div>
    );
  }
  
  export default Todo;
  