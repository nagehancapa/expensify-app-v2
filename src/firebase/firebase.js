import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA1151RrovAWRyw5lFXrosr0IC2SrgzwfM",
  authDomain: "expensify-8894b.firebaseapp.com",
  databaseURL:
    "https://expensify-8894b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-8894b",
  storageBucket: "expensify-8894b.appspot.com",
  messagingSenderId: "587365140662",
  appId: "1:587365140662:web:3f3dcca3fc157f8b1f3e17",
  measurementId: "G-46V206WRK6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getDatabase();

export { app, db as default };

// onValue(
//   ref(db, "expenses"),
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   },
//   {
//     onlyOnce: true,
//   }
// );

// onValue(ref(db, "expenses"), (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// // child_removed
// onChildRemoved(ref(db, "expenses"), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// onChildChanged(ref(db, "expenses"), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// onChildAdded(ref(db, "expenses"), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// set(push(ref(db, "expenses")), {
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createdAt: 976123498763,
// });

// update(ref(db, "notes/-MtvzjFwNhf5enkSKVgq"), {
//   body: "Buy food",
// });

// remove(ref(db, "notes/-MtvzjFwNhf5enkSKVgq"));

// const noteListRef = ref(db, "notes");
// const newNoteRef = push(noteListRef);
// set(newNoteRef, {
//   title: "Course Topics",
//   body: "React Native, Angular, Python",
// });

// // fetching data (read data once)
// get(ref(db, "location/city"))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// onValue(
//   ref(db),
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   {
//     onlyOnce: true,
//   }
// );

// // fetching data (listen for changes)
// onValue(
//   ref(db),
//   (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//   },
//   (e) => {
//     console.log("error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   set(ref(db, "age"), 30);
// }, 3500);

// setTimeout(() => {
//   off(ref(db));
// }, 7000);

// setTimeout(() => {
//   set(ref(db, "age"), 32);
// }, 10500);

// // example of fetching data (listen for changes)
// onValue(
//   ref(db),
//   (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//   },
//   (e) => {
//     console.log("error with data fetching", e);
//   }
// );

// // setting data
// set(ref(db), {
//   name: "Nagehan",
//   age: 33,
//   stressLevel: 6,
//   job: { title: "Junior software developer", company: "Google" },
//   location: { city: "Eindhoven", country: "Netherlands" },
// })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

// // changing a value
// set(ref(db, "age"), 34);

// // adding new key
// set(ref(db, "attributes"), { height: 159, weight: 51 })
//   .then(() => {
//     console.log("Second set call worked");
//   })
//   .catch((e) => {
//     console.log("Things didn't for the second error.", e);
//   });

// // removing data
// remove(ref(db, "isSingle"))
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch((e) => {
//     console.log("Did not remove data.", e);
//   });

// set(ref(db, "isSingle"), null)
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch((e) => {
//     console.log("Did not remove data.", e);
//   });

// remove(ref(db))
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch((e) => {
//     console.log("Did not remove data.", e);
//   });

// // updating data
// update(ref(db), {
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Rotterdam",
// });
