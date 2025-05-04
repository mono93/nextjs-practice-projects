import { databaseConnect } from "@/lib/db";
import { validateEmail, validatePassword } from "@/utils/sharedFunctions";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const { email, password } = req.body;

  if (
    !email ||
    email.trim() === "" ||
    !validateEmail(email) ||
    !password ||
    password.trim() === "" ||
    !validatePassword(password)
  ) {
    return res.status(400).json({ message: "Invalid Input" });
  }

  const client = await databaseConnect();
  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    client.close();
    return res.status(422).json({ message: "User already exists!" });
  }

  const hashedPassword = await hash(password, 12);
  await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });
  client.close();
  return res.status(201).json({ message: "User created!" });
}
