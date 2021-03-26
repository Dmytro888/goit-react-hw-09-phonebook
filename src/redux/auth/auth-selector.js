const getLogged = state => !!state.auth.isLogged;
const getName = state => state.auth.user.name;

export { getLogged, getName };
