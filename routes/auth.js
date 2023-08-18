module.exports = {
    CheckAuth: async function(req, res, next) {
        console.log('로그인 된 사용자입니다.');
        if(req.isAuthenticated()) {
            next();
        }
        else {
            res.redirect('/user/signin');
        }
    },
}