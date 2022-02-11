const express = require( 'express' );
const path = require( 'path' );

// const cookieParser = require( 'cookie-parser' );
// const morgan = require( 'morgan' );
// const busboy = require( 'connect-busboy' )
// const cors = require( 'cors' )
// const helmet = require( 'helmet' )



const apiRouter = require( './routes/apiRouter' );

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use( cors() )
// app.use( morgan( 'dev' ) );
// app.use(cookieParser());
// app.use( busboy() );

app.use( express.json() );
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({limit: '50mb'}));
app.use(express.static(path.join(__dirname, 'public')));




// **** API ROUTES ****
app.use( '/api', apiRouter );




// ****************************************************
// ******************* APPLICATIONS *******************
// ****************************************************


// we need this to tell about all the files for each path to use
// ****  WITHOUT THIS IT WILL NOT WORK ****
// IMPORTANT -- to do this you MUST put "proxy": "TheUrlGoesHere.com/app" AND "homepage":"app" IN THE APPS package.json 

// when going to `/app2`, serve the files at app2/build/* as static files
app.use('/password', express.static(path.join(__dirname, 'builds/password')))
app.use('/nbody', express.static(path.join(__dirname, 'builds/nbody')))

// when going to `/`, serve the files at mainApp/build/* as static files
app.use(express.static(path.join(__dirname, 'builds/portfolio')))


// These are necessary for routing within react
app.get('password/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/builds/password/index.html'))
})
app.get('nbody/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/builds/nbody/index.html'))
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/builds/portfolio/index.html'));
});



// **** Portfolio APP --- ALSO DEFAULT APPLICATION --- MUST BE LAST IN LIST ****
// app.get( "*", ( req, res ) => res.sendFile( __dirname + '/builds/portfolio/index.html'  ) );


// **** Environment Variables ****
// console.log(process.env)




// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
