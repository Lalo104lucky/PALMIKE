export const authManager = (
    state = {signed: false},
    action
) => {
    switch(action.type){
        case 'SIGNIN':
            return {
                ...action.payload,
                signed: true
            };
            break;
        case 'SINGOUT':
            signed: false
            break;
        default:
            return state;

    }
}