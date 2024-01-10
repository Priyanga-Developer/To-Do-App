import { render,screen} from "@testing-library/react";
import App from "./App";

test('should render todolist ', () => { 
    render(<App/>);
    const linkElement=screen.getByText(/To-Do-List/i);
    expect (linkElement).toBeInTheDocument();
 });
 test ("rendering  child components that are present in the document",()=>{
   const component =render(<App/>);
   const childElement=component.getAllByPlaceholderText(/Add Task/i);
   childElement.forEach((element) => {
    expect(element).toBeInTheDocument();
});
 })