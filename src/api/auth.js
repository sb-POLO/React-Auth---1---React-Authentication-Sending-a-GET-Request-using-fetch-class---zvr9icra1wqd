const delayedExecutor = (fn,time=300) =>{
    return setTimeout(()=>fn(),time)
}
export const signin = async ({email,password}) =>{
    return new Promise((resolve,reject)=>{
        const users = JSON.parse(localStorage.getItem('users') || '{}')
        if ((email in users) && users[email] == password){
            return delayedExecutor(()=>resolve({statusCode:200,message:'Loggedin Successfully'}))
        }else{
            return delayedExecutor(()=>reject({statusCode:400,message:'Wrong username or password'}))
        }
    })
}

export const signup = async ({email,password}) =>{
    const users = JSON.parse(localStorage.getItem('users') || '{}')
    return new Promise((resolve,reject)=>{
        if (email && password){
            users[email] = password
            localStorage.setItem('users',JSON.stringify(users))
            return delayedExecutor(()=>resolve({statusCode:201,message:'Successfully registered'}))
        }else{
            return delayedExecutor(()=>reject({statusCode:422,message:'Invalid Data'}))
        }
    })
}