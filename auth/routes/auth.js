var router = require('express').Router()
  , passport = require('passport')
var defaultRedirectRoutes = {failureRedirect: '/',successRedirect: '/'}

router.get('/twitter', passport.authenticate('twitter'))
router.get('/github', passport.authenticate('github'))

router.get('/twitter/callback',
  passport.authenticate('twitter', defaultRedirectRoutes))
router.get('/github/callback',
  passport.authenticate('github', defaultRedirectRoutes))

router.get('/info', function(req,res){
  req.user ? res.json(req.user) : res.writeHead(401)
  res.end()
})

router.get('/logout', function(req,res){
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

module.exports = router
