"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
let count = 0;

class NoTransitTasks
{
	postDBLoad(container) {
		const logger = container.resolve("WinstonLogger");
		const DB = container.resolve("DatabaseService").getTables();
		const quests = Object.values(DB.templates.quests);

		const fixTask = (questId, transitId, oneSession = false) => {
			const quest = quests.find((q) => q._id === questId);
			quest.conditions.AvailableForFinish = quest.conditions.AvailableForFinish.filter((c) => c.id !== transitId);
			if (oneSession) quest.conditions.AvailableForFinish.forEach((c) => c.oneSessionOnly = false);
			count++;
		};

		// Special Comms
		fixTask("66ab970848ddbe9d4a0c49a8", "66ab970848ddbe9d4a0c49ab");

		// Cream of the Crop
		fixTask("66e01ae0c391e4c94903d220", "66e2c832596e2895181e1bd4");

		// Sample IV
		fixTask("67040c78bf4be8a4ef041a65", "67262b4023c03479138728fa");

		// Foresters Duty
		fixTask("66ab9da7eb102b9bcd08591c", "66ab9da7eb102b9bcd08591f", true);

		// New Day New Paths
		fixTask("66aa58245ab22944110db6e9", "66aa5be8035c6a410dc570b2", true);

		// Know your place
		fixTask("66aa61663aa37705c5024277", "66aa61663aa37705c502427c", true);

		// Secrets of Polikhim
		fixTask("66aa74571e5e199ecd094f18", "66aa74571e5e199ecd094f1b", true);

		// Beneath the streets
		fixTask("66aba85403e0ee3101042877", "66aba85403e0ee310104287a", true);

		logger.info(`[NoTransitTasks]: Altered ${count} transit tasks.`);
	}
}

module.exports = { mod: new NoTransitTasks() };