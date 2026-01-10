/*

		be aware, this piece of work will not be clean

*/

if (2 != 5) {
		console.log("running")
	} else {
		console.log("WAHT THE FUCK")
} // haha get the reference

// worth: how much money it sells for
// accel: how fast it ages
// income: passive income
// lifespan: self-explanatory, dies when the lifespan is reached if dog is mortal, and also used to calculate when the dog "dies" and turns into oil.

class dogHead{
	constructor(worth,accel,income,lifespan,mortal){
		this.worth = worth
		this.accel = accel
		this.income = income
		this.lifespan = lifespan
		this.mortal = mortal
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
		this.worth = 0
	}
	update(){
		fakeage = 2^realage
		realage++
	}

}
// head,torso,frontlegs,hindlegs,tail,soul,realage,fakeage,othervariables...