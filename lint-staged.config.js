// @ts-nocheck
module.exports = {
  // type check typescirpt files
  "./src/**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  // Lint then format typescript and js files
  "./src/**/*.(ts|tsx|js)": (filenames) => [
    `yarn eslint --fix ${filenames.join(" ")}`,
    `yarn prettier --write ${filenames.join(" ")}`,
  ],

  // Format MarkDown and JSON
  "**/*.(md|json)": (filenames) =>
    `yarn prettier --write ${filenames.join(" ")}`,
};
