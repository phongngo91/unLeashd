export const signUp = user => (
    $.ajax ({
      url: "/api/users",
      method: "POST",
      data: user
    })
  );
  
  export const logIn = user => (
    $.ajax ({
      url: "/api/session",
      method: "POST",
      data: {
        username: user.username,
        password: user.password
      }
    })
  );
  
  export const logOut = () => (
    $.ajax ({
      url: "/api/session",
      method: "DELETE"
    })
  );
  
  