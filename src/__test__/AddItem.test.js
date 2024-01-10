import {render,screen } from "@testing-library/react"
import AddItem from "../AddItem"
import  userEvent  from "@testing-library/user-event"

describe("Test the AddItem component ",()=>{
    test('render additem form with button',async() => {
        render(<AddItem/>);
        const button = await screen.findByRole("button")
        expect(button).toBeInTheDocument();
     })
    test('render the submit function of adding task',()=>{
        render(<AddItem/>);
        const input= screen.getByTestId("inputId");
        const submitBtn =screen.getByTestId("addtask");
        userEvent.type(input,"Play Tennis");
        userEvent.click(submitBtn);
        const inputInfo=screen.getByText("PlayTennis");
        expect(inputInfo).toBeInTheDocument();
    })
})