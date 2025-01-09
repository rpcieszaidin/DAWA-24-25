import Config from "./config/Config.js";
import { IrrigationService } from "./IrrigationService.js";
import { ValvesHandler } from "./ValvesHandler.js";

IrrigationService.init(Config.urlBase, (() => {
  ValvesHandler.init(document.getElementById('container'), IrrigationService);
}));