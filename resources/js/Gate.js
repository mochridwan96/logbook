export default class Gate{

    constructor(user){
        this.user = user;

    }

    isAdmin(){
        return this.user.type === 'admin';
    }

    isIdAdmin(){
        const id = this.user.type
        return  id;
    }

    isEmployee(){
        return this.user.type === 'employee';
    }

    isIdEmployee(){
        const id = this.user.type
        return  id;
    }

    isManager(){
        return this.user.type === 'manager';
    }

    isIdManager(){
        const id = this.user.type
        return  id;
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
