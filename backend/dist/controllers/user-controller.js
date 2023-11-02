import User from "../models/User.js";
import { hash } from "bcrypt";
export const getAllUsers = async (req, res, next) => {
    try {
        // Get all users directly from the database:
        const users = await User.find();
        return res.status(200).json({ msg: "Ok!!", users });
    }
    catch (error) {
        console.log(error);
        // Change the type annotation to 'any'
        return res.status(500).json({ msg: "ERROR", cause: error.message });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res
            .status(201)
            .json({ msg: "User created", id: user._id.toString() });
    }
    catch (error) {
        return res.status(500).json({ msg: "An Error occured!" });
    }
};
//# sourceMappingURL=user-controller.js.map