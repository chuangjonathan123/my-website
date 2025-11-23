import express from "express";
import cors from "cors";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const app = express();
app.use(cors());
app.use(express.json());

const firebaseConfig = {
  apiKey: "AIzaSyA9tpKlvK1WmIwuly1CilhIsbEN2ql4fqA",
  authDomain: "invested-6ee22.firebaseapp.com",
  projectId: "invested-6ee22",
  storageBucket: "invested-6ee22.firebasestorage.com",
  messagingSenderId: "396836999366",
  appId: "1:396836999366:web:b10f241993f1df239a47c7"
};

const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb);

app.get("/test", (req, res) => {
  res.send({ message: "Backend is working!" });
});

app.get("/users", async (req, res) => {
  const snap = await getDocs(collection(db, "users"));
  let output = [];
  snap.forEach(doc => output.push({ id: doc.id, ...doc.data() }));
  res.send(output);
});

app.listen(3000, () => console.log("Server running on port 3000"));
