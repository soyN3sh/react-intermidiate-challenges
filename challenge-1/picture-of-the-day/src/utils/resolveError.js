const resolveError = (object) => {
  let error = object;

  if (object.error) {
    error = { exists: true, message: object.error.message };
  } else if (object.msg) {
    error = { exists: true, message: object.msg };
  } else {
    error = { exists: false };
  }

  return error;
};

export default resolveError;
