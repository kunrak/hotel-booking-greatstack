import User from "../models/User";

export const protect = async (req, res, next) => {
    const { userId } = req.auth;
    if (!user) {
        res.json({success: false, message: "not authenticated"})
    } else {
        const user = await User.findById(userId);
        req.user = user;
        next();
    }
};
