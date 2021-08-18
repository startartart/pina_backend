module.exports = {
    isOwner:function(req, res) {
        if (request.user) {
            return true;
        }
        else {
        return false;
        }
    },
        

    statusUI:function(req, res) {
        var authStatusUI = '<a href="/auth/login">login</a>'
        if (this.isOwner(req, response)) {
            authStatusUI = `${request.user.nickname} | <a href="/auth/logout">logout</a>`;
        }
        return authStatusUI;
    }
}