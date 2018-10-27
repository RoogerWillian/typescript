class SpaceCraft {
  constructor(public propulsor: string) { }

  jumpIntoHyperSpace() {
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

let ship = new SpaceCraft("hyperdrive")
ship.jumpIntoHyperSpace()

class MillenniumFalcon extends SpaceCraft implements ContainerShip {
  cargoContainers: number;

  constructor() {
    super("hyperdrive")
    this.cargoContainers = 4;
  }

  jumpIntoHyperSpace() {
    if (Math.random() >= 0.5) {
      super.jumpIntoHyperSpace()
    } else { console.log('Failed to jump into hyperspace') }
  }
}

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperSpace()

interface ContainerShip {
  cargoContainers: number
}

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2;
console.log(`is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)
