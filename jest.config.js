module.exports = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.test.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  }
};
