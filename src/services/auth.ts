interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "oaskdosakd9213msadkj91234n1203uasd",
        user: {
          name: "Emmanuel",
          email: "efn@cin.ufpe.br",
        },
      });
    }, 2000);
  });
}
