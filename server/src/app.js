'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

const PORT =  process.env.PORT || 3030

app.listen(PORT, function(err){
	if(err){
		console.log('there was an error starting the server', err);
	}else{
		console.log('server started successfully');
	}
})