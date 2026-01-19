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

console.log(truncateTime(500000))

let Money = new Decimal(0)

let dFletters = [
	'B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','V','W','Z','Ch','Sh','Ann','Fr'
]

let dMvowels = [
	'a','e','i','o','u','y'
]

let dLletters = [
	'x','c','n','l','e','n','ll','p','b','d','s'
]

let dLvowels = [
	'ie','e','a','ouie','o','y','',''
]

function dogName_new(){
	let dfl = dFletters[Math.round(Math.random()*dFletters.length)]
	let dmv = dMvowels[Math.round(Math.random()*dMvowels.length)]
	let dll = dLletters[Math.round(Math.random()*dLletters.length)]
	let dlv = dLvowels[Math.round(Math.random()*dLvowels.length)]

	return (dfl+dmv+dll+dlv)
}

for (i=0;i<50;i++){
	console.log(dogName_new)
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
// accel: how fast it ages
// income: passive income
// lifespan: self-explanatory, dies when the lifespan is reached if dog is mortal, and also used to calculate when the dog "dies" and turns into oil.
// mortal: if the dog is mortal

class dogHead{
	constructor(sellworth,accel,income,lifespan,cost,mortal){
		this.worth = sellworth*sellMult
		this.accel = accel
		this.income = income
		this.cost = cost
		this.lifespan = lifespan
		this.mortal = mortal
	}
} // basics

function checkifanyistrue(v){
	if (v === true){
		return true
	}
}

class dog{
	constructor(head,torso,frontlegs,hindlegs,tail,soul){
		this.identifier = (head+torso+frontlegs+hindlegs+tail+soul)
		console.log("constructing dog");
		this.head = head
		this.body = torso
		this.frontLegs = frontlegs
		this.backLegs = hindlegs
		this.tail = tail
		this.soul = soul
		this.realAge = new Decimal(1)
		this.fakeAge = [0,0,0,0,0]
		this.mortal = false
		this.accel = 1
		this.sellworth = 0
	};
	update(){
		let realYear = this.realAge.divideBy(31536000)
		let mantissa = realYear["mantissa"]
		let exponent = realYear["exponent"]
		if (isNaN(truncateTime(Math.floor(this.realAge))[0])) {
			this.fakeAge = ((Math.round(mantissa*100)/100).toString() + "e+" + (Math.round(exponent*100)/100).toString() + " years")
		} else {
			let age = truncateTime(Math.floor(this.realAge))
			let seconds = ((age[0].toString())+" seconds")
			let minutes = ((age[1].toString())+" minutes")
			let hours = ((age[2].toString())+" hours")
			let days = ((age[3].toString())+" days")
			let years = ((age[4].toString())+" years")
			if (age[4]) {
				this.fakeAge = (hours+" "+days+" "+years)
			} else if (age[3]) {
				this.fakeAge = (minutes+" "+hours+" "+days)
			} else if (age[2]) {
				this.fakeAge = (seconds+" "+minutes+" "+hours)
			} else if (age[1]) {
				this.fakeAge = (seconds+" "+minutes)
			} else if (age[0]) {
				this.fakeAge = (seconds)
			}
		}
		// this.accel = this.realAge // << REALLY exponential (for testing)
		this.realAge = this.realAge.plus(this.realAge.times(this.accel))
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

/* debug
function debug_oilHead(){
let oilHead = new dogHead(5,1,0,10,2,false,);
limbsStore = limbsStore.concat(oilHead)
console.log(limbsStore)
};
function debug_dog(){
craftDog(limbsStore[0],limbsStore[1],limbsStore[2],limbsStore[3],limbsStore[4],limbsStore[5])
console.log(limbsStore)
console.log(dogStore[0])
console.log(dogStore)
};
*/

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