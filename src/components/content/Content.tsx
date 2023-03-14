import Input from "../input/Input";
import ItemsInfo from "../itemsInfo/ItemsInfo";
import Filter from "../filter/Filter";
import TodoContainer from "../todoContainer/TodoContainer";

function Content() {
    return (
      <div className="px-7 bg-[#F2F2F2] ">
        <Input />
        <TodoContainer />
        <ItemsInfo /> 
        <Filter />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      </div>
    );
  }
  
  export default Content;
  