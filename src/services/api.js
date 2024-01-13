const BASE_URL = process.env.REACT_APP_BASE_URL;


export const testing = {
    API_TEST: BASE_URL + "/todo/getTodo",
}
export const todoDelete = {
    TODO_DELETE: BASE_URL + "/todo/deleteTodo/:id"
}