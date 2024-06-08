const log = (...args) => console.log(...args);
// Ignore these. In your real code you'd import
// the real things.
const readUser = () => Promise.resolve(true);
const getFolderInfo = () => Promise.resolve(true);
const haveWriteAccess = () => Promise.resolve(true);
const uploadToFolder = () => Promise.resolve('Success!');
// gibberish starting variables
const user = '123';
const folder = '456';
const files = ['a', 'b', 'c'];

// async function uploadFiles({ user, folder, files }) {
//   const dbUser = await readUser({ user });
//   const folderInfo = await getFolderInfo({ folder });
//   if (await haveWriteAccess({ dbUser, folderInfo })) {
//     return uploadToFolder({ dbUser, folderInfo, files });
//   } else {
//     throw new Error('No write access to that folder');
//   }
// }
// uploadFiles({ user, folder, files }).then(log);

const asyncPipe =
  (...fns) =>
  (x) =>
    fns.reduce(async (y, f) => f(await y), x);

const uploadFiles = asyncPipe(
  readUser,
  getFolderInfo,
  haveWriteAccess,
  uploadToFolder,
);
uploadFiles({ user, folder, files }).then(log);
