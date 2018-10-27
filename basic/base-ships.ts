class SpaceCraft {

  constructor(public propulsor: string) { }

  jumpIntoHyperSpace() {
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

interface ContainerShip {

  cargoContainers: number

}

export { SpaceCraft, ContainerShip }
