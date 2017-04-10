"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var container_1 = require("./src/container");
var types_1 = require("./src/types");
var repairService = container_1.default.get(types_1.default.RepairService);
repairService.fixSink();
