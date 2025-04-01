import { PrismaClient } from "@prisma/client";
import { jwtDecode } from "jwt-decode";
import { verifyjwt } from "../../backend/services/auth/auth.service.js";
// import { Groups } from "../../backend/services/auth/user.service.js";

const prisma = new PrismaClient();

export function verifyUserGroups(groups = []) {
  return async (req, res, next) => {
    try {
      let access_token = req.cookies.access_token
        ? req.cookies.access_token
        : req.headers.Authorization;
      const refresh_token = req.cookies.refresh_token
        ? req.cookies.refresh_token
        : req.headers.RefreshToken;

      if (!access_token)
        return res.status(401).json({ message: "Hozzáférés megtagadva" });

      let tokenValid = false;
      try {
        const tokenResult = await verifyjwt(access_token, refresh_token);
        
        if (tokenResult !== "OK" && tokenResult) {
          access_token = tokenResult;
          res.cookie("access_token", tokenResult, {
            maxAge: 24 * 60 * 1000,
            sameSite: "none",
            secure: true,
            httpsOnly: false,
            path: "/",
          });
        }
        tokenValid = true;
      } catch (tokenError) {
        res.clearCookie("access_token");
        res.clearCookie("refresh_token");
        return res.status(401).json({ message: tokenError });
      }

      if (!tokenValid) return;

      const { sub } = jwtDecode(access_token);

      const user = await prisma.user.findUnique({
        where: {
          id: sub,
        },
        include: {
          group: true, 
        },
      });

      if (!user) return res.status(401).json({ message: "Access Denied" });
      
      if (!user.group) return res.status(401).json({ message: "User group not found" });


      if (groups.includes(user.group.name)) {
        switch (req.method) {
          case "GET":
            if (user.group.read) return next();
            break;
          case "POST":
            if (user.group.write) return next();
            break;
          case "PUT":
            if (user.group.update) return next();
            break;
          case "DELETE":
            if (user.group.delete) return next();
            break;
          case "OPTIONS":
            return next();
          default:
            break;
        }
      }

      return res.status(403).json({ message: "Access Denied" });
    } catch (error) {
      console.error("Auth middleware error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}