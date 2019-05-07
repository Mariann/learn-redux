// a reducer takes inn two things 


function posts(state = [], action){
    console.log("The post will change!");
    console.log(state, action);
    switch(action.type){
        case 'INCREMENT_LIKES':
            console.log('increment likes'); 
            const i = action.index; 
            return[
                ...state.slice(0,i),  //before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(0 + 1), //after the one we are updating
            ]
        default: 
            return state; 
    }
    return state;
}

export default posts; 



