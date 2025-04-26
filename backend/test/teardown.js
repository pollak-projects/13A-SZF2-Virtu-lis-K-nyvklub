import { disconnectPrisma } from '../lib/prisma.js';

export default async function() {
  await disconnectPrisma();
}