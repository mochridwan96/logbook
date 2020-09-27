export default class Gate{
    
    constructor(user){
        this.user = user;

    }

    isAdmin(){
        return this.user.type === 'admin';
    }

    isEmployee(){
        return this.user.type === 'employee';
    }

    isManager(){
        return this.user.type === 'manager';
    }

    isAdminOrAuthor(){
        if(this.user.type === 'admin' || this.user.type === 'author'){
            return true;
        }
    }

    isAuthorOrUser(){
        if(this.user.type === 'user' || this.user.type === 'author'){
            return true;
        }
    }

}
