const mockAuth0Resolve = {
  WebAuth: class mockAuth0WebAuth {
    signup(variables, cb) {
      cb("", "Sign up Success");
    }
    passwordlessStart(variable, cb) {
      cb("", "Otp start Success");
    }
    passwordlessLogin(variable, cb) {
      cb("", "Otp login Success");
    }
    login(variable, cb) {
      cb("", "Password login Success");
    }
    changePassword(variable, cb) {
      cb("", "Change password Link Send");
    }
  },
};

export default mockAuth0Resolve;
