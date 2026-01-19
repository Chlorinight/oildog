/*

		be aware, this piece of work will not be clean

*/

// general functions
function truncateTime(seconds){
	let minutes = Math.floor(seconds /60)
	let hours =   Math.floor(minutes /60)
	let days =    Math.floor(hours   /24)
	let years =   Math.floor(days    /365)
	
	seconds = seconds - (minutes*60)
	minutes = minutes - (hours*60)
	hours = hours - (days*24)
	days = days - (years*365)

	if (seconds<0){
		seconds = 0
	}
	if (minutes<0){
		minutes = 0
	}
	if (hours<0){
		hours = 0
	}
	if (days<0){
		days = 0
	}
	if (years<0){
		years = 0
	}

return [seconds,minutes,hours,days,years]
};

let Money = new Decimal(0)

let dFletters = [
	'B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','V','W','Z','Ch','Sh','Ann','Fr'
]

let dMvowels = [
	'a','e','i','o','u','y'
]

let dLletters = [
	'x','c','n','l','e','n','ll','p','b','d','s','hn','t'
]

let dLvowels = [
	'ie','e','a','ouie','o','y','ey','','','i','u','an','ay','','','a','e','ie','e','a','o','y','ey','','','i','u','an','ay','','','a','e'
]

function foundClassProperty_inArray(array,propertyname,propertyvalue){
	let i
	for (i=0;i<array.length;i++){
		if (array[i][propertyname] == propertyvalue){
			break
		}
	}
	return array[i]
}

function dogName_new(){
	let dfl = dFletters[Math.round(Math.random()*(dFletters.length-1))]
	let dmv = dMvowels[Math.round(Math.random()*(dMvowels.length-1))]
	let dll = dLletters[Math.round(Math.random()*(dLletters.length-1))]
	let dlv = dLvowels[Math.round(Math.random()*(dLvowels.length-1))]
	let royaltitle = ''
	if (Math.round(Math.random()*100)==100){
		let royalnumber = (Math.round(Math.random()*500)).toString() // fuck why is this shit so hard to code in
		let numberending = 'th'
		if (royalnumber[royalnumber.length - 1] == '1'){
			numberending = 'st'
		} else if (royalnumber[royalnumber.length - 1] == '2') {
			numberending = 'nd'
		} else if (royalnumber[royalnumber.length - 1] == '3') {
			numberending = 'rd'
		}
		royaltitle = (' the '+royalnumber+numberending)
	}
	return (dfl+dmv+dll+dlv+royaltitle)
}

// load save


// haha get the refrance

if (2 != 5) {
		console.log("script is running")
	} else {
		console.log("WAHT THE FUCK")
}

// upgrades?

let sellMult = 1

// inventory

let limbsStore = []
let dogStore = []

// dog part classing bluh bluh

// worth: how much money it sells for
// accel: how fast it Ages
// income: passive income
// lifespan: self-explanatory, dies when the lifespan is reached if dog is mortal, and also used to calculate when the dog "dies" and turns into oil.
// mortal: if the dog is mortal

class dogHead{
	constructor(type,sellworth,accel,income,lifespan,cost,mortal){
		this.worth = sellworth*sellMult
		this.accel = accel
		this.income = income
		this.cost = cost
		this.lifespan = lifespan
		this.mortal = mortal
		this.type = type
	}
} // basics

function checkifanyistrue(v){
	if (v === true){
		return true
	}
}

class dog{
	constructor(head,torso,frontlegs,hindlegs,tail,soul){
		let name = dogName_new()
		if (foundClassProperty_inArray(dogStore,"name",name)){
			let i = 0
			let newName = (name+'_'+'1')
			while (foundClassProperty_inArray(dogStore,"name",newName)){
			i++
			newName = (name+'_'+i.toString())
			}
			this.name = newName
		} else {
			this.name = name
		}
		this.head = head
		this.body = torso
		this.frontLegs = frontlegs
		this.backLegs = hindlegs
		this.tail = tail
		this.soul = soul
		this.realAge = new Decimal(0)
		this.Age = new Decimal(1)
		this.displayAge = [0,0,0,0,0]
		this.mortal = false
		this.accel = 1
		this.sellworth = 0
	};
	update(){
		let realYear = this.Age.divideBy(31536000)
		let mantissa = realYear["mantissa"]
		let exponent = realYear["exponent"]
		if (isNaN(truncateTime(Math.floor(this.Age))[0])) {
			this.displayAge = ((Math.round(mantissa*100)/100).toString() + "e+" + (Math.round(exponent*100)/100).toString() + " years")
		} else {
			let Age = truncateTime(Math.floor(this.Age))
			let seconds = ((Age[0].toString())+" seconds")
			let minutes = ((Age[1].toString())+" minutes")
			let hours = ((Age[2].toString())+" hours")
			let days = ((Age[3].toString())+" days")
			let years = ((Age[4].toString())+" years")
			if (Age[4]) {
				this.displayAge = (hours+" "+days+" "+years)
			} else if (Age[3]) {
				this.displayAge = (minutes+" "+hours+" "+days)
			} else if (Age[2]) {
				this.displayAge = (seconds+" "+minutes+" "+hours)
			} else if (Age[1]) {
				this.displayAge = (seconds+" "+minutes)
			} else if (Age[0]) {
				this.displayAge = (seconds)
			}
		}
		// this.accel = this.Age // << REALLY exponential (for testing)
		this.realAge = this.realAge.plus(1)
		this.Age = this.Age.plus(this.Age.times(this.accel))
		console.log(this.realAge)
		console.log(this.Age)
		console.log(this.displayAge)
	}
	sell(){
		Money = Money + this.sellworth
		dogStore.splice(dogStore.indexOf(this),1)
	}
}

// more functions blahblah

function craftDog(head,torso,frontlegs,hindlegs,tail,soul){
	dogStore = dogStore.concat(new dog(head,torso,frontlegs,hindlegs,tail,soul));
	limbsStore.splice(limbsStore.indexOf(head),1)
	limbsStore.splice(limbsStore.indexOf(torso),1)
	limbsStore.splice(limbsStore.indexOf(frontlegs),1)
	limbsStore.splice(limbsStore.indexOf(hindlegs),1)
	limbsStore.splice(limbsStore.indexOf(tail),1)
}

/* debug */
function debug_oilHead(){
let oilHead = new dogHead("oildog",5,1,0,10,2,false,);
limbsStore = limbsStore.concat(oilHead)
};
function debug_dog(){
craftDog(limbsStore[0],limbsStore[1],limbsStore[2],limbsStore[3],limbsStore[4],limbsStore[5])
};
function debug_fullset(){
 debug_oilHead()
  debug_oilHead()
   debug_oilHead()
    debug_oilHead()
	 debug_oilHead()

debug_dog()
}
/* */ 

let frameCount = 0;

async function updater()
{
	while (true)
	{
		window.requestAnimationFrame(function(){
			for (i=0; i<dogStore.length; i++){
				dogStore[i].update();
			}
		});
		frameCount++;
		await sleep(1000);
	}
}

updater();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}