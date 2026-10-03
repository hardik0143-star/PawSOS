import crypto from 'node:crypto';
const password = process.argv[2];
if (!password) {
  console.error('Usage: npm run generate-admin-hash -- "new-password"');
  process.exit(1);
}
const salt = crypto.randomBytes(16);
const hash = await new Promise((resolve, reject) => crypto.scrypt(password, salt, 64, { N: 16384, r: 8, p: 1 }, (err, key) => err ? reject(err) : resolve(key)));
console.log(`ADMIN_PASSWORD_SALT=${salt.toString('hex')}`);
console.log(`ADMIN_PASSWORD_HASH=${hash.toString('hex')}`);
