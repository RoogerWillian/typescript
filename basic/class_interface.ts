import { SpaceCraft, ContainerShip } from './base-ships'
import { MillenniumFalcon } from './starfighets'

import * as _ from 'lodash'
console.log(_.pad("Typescript Examples", 40, "="))

let ship = new SpaceCraft("hyperdrive")
ship.jumpIntoHyperSpace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperSpace()

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2
console.log(`is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)
