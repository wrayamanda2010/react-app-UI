function AuthReducer(state = null, action){
  const initaialState = {
    username: null,
    token: null,
    error: null
  }

  if(state){
    switch(action.type){
      default:
        return state
    }
  }else{
    return { ...initaialState}
  }
}

export default AuthReducer
