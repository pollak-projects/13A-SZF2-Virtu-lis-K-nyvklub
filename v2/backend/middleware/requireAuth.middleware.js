import { verifyjwt } from "../services/auth/auth.service.js";

const publicRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/verify-email",
  "/auth/forgot-password", 
  "/auth/reset-password",
  "/uploads"
];

export function requireAuth() {
  return async (req, res, next) => {
    const isPublicRoute = publicRoutes.some(route => 
      req.path.startsWith(route) || req.path === "/"
    );
    
    if (isPublicRoute) {
      return next();
    }

    const access_token = (req.cookies && req.cookies.access_token) || 
      (req.headers.authorization && req.headers.authorization.split(" ")[1]);
    const refresh_token = (req.cookies && req.cookies.refresh_token) || 
      req.headers.refresh_token;

    if (!access_token || !refresh_token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    try {
      const result = await verifyjwt(access_token, refresh_token);
      
      if (result !== "OK" && result) {
        res.cookie("access_token", result, {
          maxAge: 24 * 60 * 60 * 1000,
          sameSite: "none",
          secure: true,
          httpOnly: false,
          domain: "pollakkonyklub.info",
          path: "/",
        });
      }
      
      next();
    } catch (error) {
      res.clearCookie("access_token", {
        domain: "pollakkonyklub.info",
        path: "/",
      });
      res.clearCookie("refresh_token", {
        domain: "pollakkonyklub.info",
        path: "/",
      });
      
      return res.status(401).json({ message: "Authentication required" });
    }
  };
}