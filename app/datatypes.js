function dataTypes (arg){
	
	if (typeof arg == 'string'){
		return arg.length;
	} 

	else if ((typeof arg == "object" && arg === null) || arg === undefined){
	  return "no value";
	}

	else if (typeof arg === "boolean"){
	  return arg;
	}

	else if (typeof arg === "number"){
	  if(arg == 100){
	    return "equal to 100";
	  }
	  else if(arg < 100){
	    return "less than 100";
	  }
	  else if(arg > 100){
	    return "more than 100";
	  }
	}

	else if (Array.isArray(arg)){
 		if (arg[2] !== null){
 		  return arg[2];
 		}
 		else{
 	   	return undefined;
	  }
 	}
 	
	else if (typeof arg == "function"){
	  return arg(true);
  }
}

module.exports = dataTypes;