const TodoController = require('../../controllers/todo.controller')
const TodoModel = require("../../model/todo.model");

TodoModel.create = jest.fn();

describe("TodoController.createTodo", ()=>{
    instanceof(("should have a createTOdo function", ()=>{
        expect(typeof TodoController.createTodo).toBe("function");
    }));
    it("should call TodoModel.create", () => {
        TodoController.createTodo();

        expect(TodoModel.create).toBeCalled();
    })
})