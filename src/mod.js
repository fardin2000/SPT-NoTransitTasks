"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');

class NoTransitTasks 
{   
    postDBLoad(container) {
		const logger = container.resolve("WinstonLogger");
        const DB = container.resolve("DatabaseService").getTables();
		const quests = Object.values(DB.templates.quests);
		
		// Special Comms
		// Remove the transit, rest is fine
		const specialComms = quests.find((q) => q._id === "66ab970848ddbe9d4a0c49a8");
		specialComms.conditions.AvailableForFinish = specialComms.conditions.AvailableForFinish.filter((c) => c.id !== "66ab970848ddbe9d4a0c49ab");
		
		// Foresters Duty
		// Remove the transit, remove the session requirement
		const forester = quests.find((q) => q._id === "66ab9da7eb102b9bcd08591c");
		forester.conditions.AvailableForFinish = forester.conditions.AvailableForFinish.filter((c) => c.id !== "66ab9da7eb102b9bcd08591f");
		forester.conditions.AvailableForFinish.forEach((c) => c.oneSessionOnly = false)
		
		// New Day New Paths
		// Remove the transit, remove the session requirement
		const newDay = quests.find((q) => q._id === "66aa58245ab22944110db6e9");
		newDay.conditions.AvailableForFinish = newDay.conditions.AvailableForFinish.filter((c) => c.id !== "66aa5be8035c6a410dc570b2");
		newDay.conditions.AvailableForFinish.forEach((c) => c.oneSessionOnly = false)
		
		// Know your place
		// Remove the transit, remove the session requirement
		const knowYourPlace = quests.find((q) => q._id === "66aa61663aa37705c5024277");
		knowYourPlace.conditions.AvailableForFinish = knowYourPlace.conditions.AvailableForFinish.filter((c) => c.id !== "66aa61663aa37705c502427c");
		knowYourPlace.conditions.AvailableForFinish.forEach((c) => c.oneSessionOnly = false)
		
		// Secrets of Polikhim
		// Remove the transit, remove the session requirement
		const secrets = quests.find((q) => q._id === "66aa74571e5e199ecd094f18");
		secrets.conditions.AvailableForFinish = secrets.conditions.AvailableForFinish.filter((c) => c.id !== "66aa74571e5e199ecd094f1b");
		secrets.conditions.AvailableForFinish.forEach((c) => c.oneSessionOnly = false)
		
		// Beneath the streets
		// Remove the transit, remove the session requirement
		const streets = quests.find((q) => q._id === "66aba85403e0ee3101042877");
		streets.conditions.AvailableForFinish = streets.conditions.AvailableForFinish.filter((c) => c.id !== "66aba85403e0ee310104287a");
		streets.conditions.AvailableForFinish.forEach((c) => c.oneSessionOnly = false)
		
		// Cream of the Crop
		// Remove the transit, rest is fine
		const cream = quests.find((q) => q._id === "66e01ae0c391e4c94903d220");
		cream.conditions.AvailableForFinish = cream.conditions.AvailableForFinish.filter((c) => c.id !== "66e2c832596e2895181e1bd4");
		
		// Sample IV
		// Remove the transit, rest is fine
		const sampleIv = quests.find((q) => q._id === "67040c78bf4be8a4ef041a65");
		sampleIv.conditions.AvailableForFinish = sampleIv.conditions.AvailableForFinish.filter((c) => c.id !== "67262b4023c03479138728fa");
	}
}

module.exports = { mod: new NoTransitTasks() };
