const initialState = []

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD":
            return [...state, action.todo]
        case "MINUS":
            return state - 1
    }
}

export { todoReducer }