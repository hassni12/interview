// 1. The "Frequency Map" Pattern
// The Problem: Given an array of task IDs from an automation log, find the ID that appears most frequently.

const logs = ["job1", "job2", "job1", "job3", "job1", "job2"];

function HighFrequencyMap(arr) {
  const count = {};
  let maxCount = 0;
  let mostFreq = arr[0];

  for (let items of arr) {
    count[items] = (count[items] || 0) + 1;
    if (count[items] > maxCount) {
      maxCount = count[items];
      mostFreq = items;
    }
  }
  //   console.log(count, mostFreq, maxCount);
}
HighFrequencyMap(logs);
// 2. Array Transformation (The "Data Cleaner")
// The Problem: You have an array of users with their active tasks. Return a single array containing only the unique task names from users who are "active".

// Why it's asked: Tests your mastery of .filter(), .map(), .flatMap(), and the Set object.

// JavaScript
const users = [
  { id: 1, active: true, tasks: ["Backup", "Email"] },
  { id: 2, active: false, tasks: ["Update"] },
  { id: 3, active: true, tasks: ["Email", "Security"] },
];

const dataCleaner = [
  ...new Set(users.filter((u) => u.active).flatMap((u) => u.tasks)),
];

// console.log(dataCleaner);
// 3. Asynchronous Coordination (Promise.all)
// The Problem: You need to trigger 3 different automation APIs. If one fails, the whole process should stop. If all succeed, return their combined results.

// Why it's asked: Essential for automation. Tests your knowledge of the Promise lifecycle.

// JavaScript
const triggerAPI = (id) => Promise.resolve(`Data from ${id}`);
// console.log(triggerAPI)
async function runPromise() {
  try {
    const results = await Promise.all([
      triggerAPI(1),
      triggerAPI(2),
      triggerAPI(3),
    ]);
    console.log("All success:", results);
  } catch (error) {
    console.log("failed all promise", error);
  }
}

// runPromise()

// 4. Grouping Data (The .reduce() Power)
// The Problem: Take an array of automation "Jobs" and group them by their status.

// Why it's asked: This is a classic "Senior" level question to see if you can handle complex data structures.

// JavaScript
const jobs = [
  { id: 1, status: "complete" },
  { id: 2, status: "pending" },
  { id: 3, status: "complete" },
];

const grouped = jobs.reduce((acc, job) => {
  console.log(job);
  acc[job.status] = acc[job.status] || [];
  //   acc[job.status].push(job);

  return acc;
}, {});
console.log(grouped);
