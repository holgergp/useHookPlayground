export const redirect = (target) => {
  console.log("target", target);
};

export const updateName = async (newName) => {
  console.log("newName");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newName);
    }, 2000);
  });
};
