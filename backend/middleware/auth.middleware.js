import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export function verifyUserGroups(groups = []) {
  return async (req, res, next) => {
    try {
      // Get token from Authorization header
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Authorization header required" });
      }
      
      const token = authHeader.split(' ')[1];
      
      // Get JWT configuration from database
      const data = await prisma.maindata.findFirst();
      if (!data) {
        return res.status(500).json({ message: "JWT configuration not found" });
      }
      
      // Verify token
      const decoded = jwt.verify(token, data.JWTSecret, {
        algorithm: data.JWTAlgorithm || 'HS256'
      });
      
      const userId = decoded.sub || decoded.id;
      
      // Get user with their group
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { group: true }
      });
      
      if (!user || !user.group) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      
      // Check if user's group is in the allowed groups
      if (groups.includes(user.group.name)) {
        return next();
      }
      
      return res.status(403).json({ message: "Forbidden - insufficient permissions" });
      
    } catch (error) {
      console.error("Auth middleware error:", error);
      if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: "Invalid or expired token" });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}