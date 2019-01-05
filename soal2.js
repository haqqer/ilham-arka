function validatePass(pass) {
	let upper = 0;
	let lower = 0;
	let num = 0;
	let special = 0;
	for(i=0; i<pass.length; i++) {
		if(pass[i].match(/[a-z]/)) {
			lower+=1
		} else if(pass[i].match(/[A-Z]/)) {
			upper+=1;
		} else if(pass[i].match(/[0-9]/)) {
			num+=1;
		} else if(!pass[i].match(/[A-Za-z0-9]/)) {
			special+=1;
		}
	
	}
	if(upper>0 && lower>0 && num>0 && special>0) {
		return true;
	}
	return true;
}

console.log(validatePass("L0rd_hacker"))
