const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      token: localStorage.getItem("token"),
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],     
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      registrarUsuarioFlux: async (usuario) => {
        console.log(usuario);
        const resp = await fetch(process.env.BACKEND_URL + "/api/registro", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(usuario),
        });
        const data = await resp.json();
      },

      // 'LOGIN'
      loginFlux: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            `${process.env.BACKEND_URL}/api/login`,
            opts
          );
          if (resp.status !== 200) {
            const mensaje = await resp.json();
            alert(mensaje.msg);
            return false;
          }

          const data = await resp.json();
          console.log("Viene del backend", data);
          sessionStorage.setItem("token", data.token);
          setStore({ token: data.token });
          return true;
        } catch (error) {
          console.error("Error al hacer login");
        }
      },
      syncTokenSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "La aplicacion acaba de cargar, sincronizando el token de session storage"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
          else {
            actions.logout();
          }
      },
      // loginFlux: async (email, password) => {
      //   const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
          // method: "POST", // *GET, POST, PUT, DELETE, etc.
          // headers: {
          //   "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        //   body: JSON.stringify({
        //     email: email,
        //     password: password,
        //   }),
        // });
        // const data = await resp.json();
        // setStore({ token: data.token });
        // sessionStorage.setItem("token", data.token);
      //},
      logout: () => {
        const token = localStorage.removeItem("token");
        console.log("Se han borrado todos los tokens");
        setStore({ token: null });
      },
    },
  };
};

export default getState;
