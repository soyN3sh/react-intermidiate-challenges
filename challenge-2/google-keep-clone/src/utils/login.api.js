const mockedUser = {
  id: "123",
  name: "Wizeline",
  avatarUrl:
    "https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png",
};

const loginApi = async (email, password) => {
  let loginState = {
    loading: true,
    error: "",
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "alejandro.huerta@wizeline.com" && password === "Rocks!") {
        loginState = { loading: false, error: "" };
        return resolve({ mockedUser, loginState });
      }
      loginState = { loading: false, error: "Email or password invalid" };
      return reject(new Error("Email or password invalid"), loginState);
    }, 500);
  });
};

export default loginApi;
