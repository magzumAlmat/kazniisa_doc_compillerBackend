const express=require('express')
const router=express.Router()
const {sendVerificationEmail,verifyCode, signUp, logIn,createCompany,verifyCodeInspector,
companySearchByBin,companySearchByContactPhone,companySearchByName,companySearchByContactEmail
}=require('./controllers')
const {validateSignUp} = require('./middlewares')
const {upload} = require('./utils')
const passport = require('passport');


router.post('/api/auth/sendmail',sendVerificationEmail )
router.post('/api/auth/verifycode',verifyCode )



router.post('/api/auth/inspector/verifycode',verifyCodeInspector )
// router.post('/api/auth/signup', upload.single('company_logo'), validateSignUp, signUp)
router.post('/api/auth/createcompany',  passport.authenticate('jwt', {session: false}),createCompany)
router.get('/api/auth/getcompanybybin/:bin',  passport.authenticate('jwt', {session: false}),companySearchByBin)
router.get('/api/auth/getcompanybyemail/:contactEmail',  passport.authenticate('jwt', {session: false}),companySearchByContactEmail)
router.get('/api/auth/getcompanybyphone/:contactPhone',  passport.authenticate('jwt', {session: false}),companySearchByContactPhone)
router.get('/api/auth/getcompanybyname/:name',  passport.authenticate('jwt', {session: false}),companySearchByName)





router.post('/api/auth/login', logIn)
module.exports=router