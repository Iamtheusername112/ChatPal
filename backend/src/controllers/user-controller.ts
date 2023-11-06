import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get all users directly from the database:
    const users = await User.find();
    return res.status(200).json({ msg: "Ok!!", users });
  } catch (error: any) {
    console.log(error);
    // Change the type annotation to 'any'
    return res.status(500).json({ msg: "ERROR", cause: error.message });
  }
};

export const userSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(401).send("User already registered");

    const hashedPassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    return res
      .status(201)
      .json({ msg: "User created", id: user._id.toString() });
  } catch (error: any) {
    return res.status(500).json({ msg: "An Error occured!" });
  }
};

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //User Login
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).send("User not registered");
    }

    const isPasswordCorrect = await compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return res.status(403).send("Incorrect Password!");
    }

    return res.status(201).json({ msg: "Ok", id: existingUser._id.toString() });
  } catch (error: any) {
    return res.status(500).json({ msg: "An Error occured!" });
  }
};
