import backgrounds from "react-storybook-addon-backgrounds";

export const bgOptions = (options = []) => {
  return backgrounds([
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ].concat(options));
};
