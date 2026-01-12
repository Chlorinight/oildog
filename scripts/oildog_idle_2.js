/*

		be aware, this piece of work will not be clean

*/

let Money = 0

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

let dogStore = {}

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
}
let oilHead = dogHead(5,1,0,10,2,false)
let dognew = dog()

function checkifanyistrue(v){
	if (v === true){
		return true
	}
}

class dog{
	constructor(head,torso,frontlegs,hindlegs,tail,soul){
		this.head = head
		this.body = torso
		this.frontLegs = frontlegs
		this.backLegs = hindlegs
		this.tail = tail
		this.soul = soul
		this.realage = 1
		this.fakeage = 1
		this.mortal = false
	}
	update(){
		fakeage = 2^realage
		realage = realage+(realage*this.accel)
	}

}
// head,torso,frontlegs,hindlegs,tail,soul,realage,fakeage,othervariables...