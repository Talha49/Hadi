export const Helpers = {
  formatDate: (date) => {
    return new Intl.DateTimeFormat('en-US').format(new Date(date));
  },
  
  validateEmail: (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  },
};
