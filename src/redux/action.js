export const incrementCounter = (counter) => {
    console.log("In increment action", counter);
    return {
        type:"fetch_guests",
        data: counter
    }
}

export const decrementCounter = (data) => {
    console.log("In decrement action", data);
    return {
        type: "decrement_counter",
        data
    }
}