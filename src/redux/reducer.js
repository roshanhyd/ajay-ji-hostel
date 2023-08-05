export const counterReducer = (data1=0, action) => {
    console.warn("reducer called", action, data1);
    switch(action.type) {
        case "increment_counter":
            data1++;
            break;
        case "decrement_counter":
            data1--;
            break;
        case "set_guests":
            return action.data; 
        default:
            console.log(action.type);
    }
    return data1;
}