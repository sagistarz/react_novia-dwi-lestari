/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: 'jsdom', // Menambahkan opsi testEnvironment
};

module.exports = config;

// /** @returns {Promise<import('jest').Config>} */
// module.exports = async () => {
//   return {
//     verbose: true,
//   };
// };