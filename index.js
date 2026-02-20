// // 1. The "Frequency Map" Pattern
// // The Problem: Given an array of task IDs from an automation log, find the ID that appears most frequently.

// const logs = ["job1", "job2", "job1", "job3", "job1", "job2"];

// function HighFrequencyMap(arr) {
//   const count = {};
//   let maxCount = 0;
//   let mostFreq = arr[0];

//   for (let items of arr) {
//     count[items] = (count[items] || 0) + 1;
//     if (count[items] > maxCount) {
//       maxCount = count[items];
//       mostFreq = items;
//     }
//   }
//   //   console.log(count, mostFreq, maxCount);
// }
// HighFrequencyMap(logs);
// // 2. Array Transformation (The "Data Cleaner")
// // The Problem: You have an array of users with their active tasks. Return a single array containing only the unique task names from users who are "active".

// // Why it's asked: Tests your mastery of .filter(), .map(), .flatMap(), and the Set object.

// // JavaScript
// const users = [
//   { id: 1, active: true, tasks: ["Backup", "Email"] },
//   { id: 2, active: false, tasks: ["Update"] },
//   { id: 3, active: true, tasks: ["Email", "Security"] },
// ];

// const dataCleaner = [
//   ...new Set(users.filter((u) => u.active).flatMap((u) => u.tasks)),
// ];

// // console.log(dataCleaner);
// // 3. Asynchronous Coordination (Promise.all)
// // The Problem: You need to trigger 3 different automation APIs. If one fails, the whole process should stop. If all succeed, return their combined results.

// // Why it's asked: Essential for automation. Tests your knowledge of the Promise lifecycle.

// // JavaScript
// const triggerAPI = (id) => Promise.resolve(`Data from ${id}`);
// // console.log(triggerAPI)
// async function runPromise() {
//   try {
//     const results = await Promise.all([
//       triggerAPI(1),
//       triggerAPI(2),
//       triggerAPI(3),
//     ]);
//     console.log("All success:", results);
//   } catch (error) {
//     console.log("failed all promise", error);
//   }
// }

// // runPromise()

// // 4. Grouping Data (The .reduce() Power)
// // The Problem: Take an array of automation "Jobs" and group them by their status.

// // Why it's asked: This is a classic "Senior" level question to see if you can handle complex data structures.

// // JavaScript
// const jobs = [
//   { id: 1, status: "complete" },
//   { id: 2, status: "pending" },
//   { id: 3, status: "complete" },
// ];

// const grouped = jobs.reduce((acc, job) => {
//   console.log(job);
//   acc[job.status] = acc[job.status] || [];
//   //   acc[job.status].push(job);

//   return acc;
// }, {});
// // console.log(grouped);
// function getFileData(path) {
//   const parts = path.split("/");
//   const fullName = parts.pop();
//   const name = fullName.split(".");
//   console.log(name);
//   //   return { name, ext };
// }
// // getFileData("/users/admin/scripts/restart.js")

// // 1. The "Frequency Counter" (Logic & Efficiency)
// // Scenario: You have a list of sensor IDs and need to find if any ID is duplicated.

// // Problem: Write a function that returns true if any value appears at least twice in an array.

// const EmpIds = [101, 102, 103, 104];
// function duplcate(arr) {
//   let seen = new Set();
//   for (let id of arr) {
//     if (seen.has(id)) return true;
//     seen.add(id);
//     // console.log(id)
//   }
//   return seen;
// }

// // console.log(duplcate(EmpIds));
// // Problem: Write a function to find a value by key in a nested object.
// function findNestedValue(obj, key) {
//   // if(obj.hasOwnProperty(key)) return obj[key]

//   for (let val in obj) {
//     if (val === key) {
//       return obj[val];
//     }

//     if (typeof obj[val] === "object") {
//       const result = findNestedValue(obj[val], key);

//       if (!!result) {
//         return result;
//       }
//     }
//   }

//   return null;
// }

// const config = {
//   api: { v1: { status: "Active" }, v2: { status: "Deprecated" } },
//   api2: { v1: { status: "Active" }, v2: { status: "Deprecated" } },
// };
// // console.log(findNestedValue(config, "v3"));
// //  { status: "Deprecated" }
// // Output: "CRITICAL: Security Patch (ID: 2) | CRITICAL: Database Sync (ID: 3)"

// // "The Data Transformer" (Advanced Array Methods)
// // Scenario: Convert an array of raw "Job" objects into a report that only shows "High Priority" jobs formatted as strings.

// // Problem: Filter by priority, then map to a custom string.

// // JavaScript
// const jobs1 = [
//   { id: 1, name: "Backup", priority: "Low" },
//   { id: 2, name: "Security Patch", priority: "High" },
//   { id: 3, name: "Database Sync", priority: "High" },
// ];

// const highPrority = jobs1
//   .filter((u) => u.priority === "High")
//   .map((jobs) => `CRITICAL: ${jobs.name} ID: (${jobs.id})`)
//   .join(" | ");
// // console.log(highPrority);
// function getAverage(data, id) {
//   // 1. Filter for the specific ID
//   const filtered = data.filter((item) => item.sensorId === id);
//   console.log(filtered, "filter");
//   // 2. Handle edge case: what if ID doesn't exist?
//   if (filtered.length === 0) return 0;

//   // 3. Sum values and divide by count
//   const sum = filtered.reduce((acc, curr) => acc + curr.value, 0);
//   //   console.log(sum)
//   return sum / filtered.length;
// }
// const readings = [
//   { sensorId: 1, value: 22.5 },
//   { sensorId: 2, value: 19.0 },
//   { sensorId: 1, value: 23.5 },
//   { sensorId: 3, value: 21.0 },
//   { sensorId: 2, value: 20.0 },
// ];
// // console.log(getAverage(readings, 2));
// // The Scenario: You receive a list of device names from a building's network, but many are duplicates.
// // Task: Write a function that takes an array of strings and returns a new array containing only the unique names, sorted alphabetically.
// const devices = [
//   "Thermostat-A",
//   "Camera-1",
//   "Thermostat-A",
//   "Light-Main",
//   "Camera-1",
// ];

// function getUniqueDevices(list) {
//   const newArry = [...new Set(list)].sort();
//   return newArry;
// }

// // console.log(getUniqueDevices(devices))
// // Problem 2: The "Anomaly Detector" (Logic & Loops)
// // The Scenario: A sensor should report a temperature between 18°C and 25°C. Anything outside this is an "anomaly."
// // Task: Write a function that takes an array of temperatures and returns an object containing:

// // The count of anomalies.

// // The max temperature found.

// // The Scenario: A sensor should report a temperature between 18°C and 25°C. Anything outside this is an "anomaly."
// const temps = [20, 17, 22, 26, 19, 30, 21, 40];

// function analyzeTemps(data) {
//   const maxData = data.reduce(
//     (acc, val) => {
//       if (val < 18 || val > 25) {
//         acc.count++;
//       }
//       if (val > acc.max) {
//         acc.max = val;
//       }
//       return acc;
//     },
//     { count: 0, max: 0 },
//   );
//   return maxData;
// }

// // console.log(analyzeTemps(temps));
// const sensorLogs = [
//   { id: "S1", floor: 1, status: "error" },
//   { id: "S2", floor: 2, status: "active" },
//   { id: "S3", floor: 1, status: "error" },
//   { id: "S4", floor: 3, status: "error" },
//   { id: "S5", floor: 2, status: "error" },
//   { id: "S6", floor: 4, status: "error" },
// ];

// function getErrorReport(logs) {
//   const reported = logs.reduce((report, current) => {
//     if (current.status === "error") {
//       report[current.floor] = (report[current.floor] || 0) + 1;
//     }
//     return report;
//   }, {});
//   return reported;
// }
// console.log(getErrorReport(sensorLogs));

