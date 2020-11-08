const rutas = [
    {
        name: "Dashboard",
        icon: "mdi mdi-home menu-icon",
        color: "blue",
        textColor: "white",
        link: "/dashbord"
    },
    {
        name: "Accesos",
        icon: "mdi mdi-home menu-icon",
        color: "blue",
        textColor: "white",
        link: "#acceso",
        children: [
            {
                name: "Rol",
                icon: "mdi mdi-home menu-icon",
                color: "blue",
                textColor: "white",
                link: "/acceso/rol"
            },
            {
                name: "Menu",
                icon: "mdi mdi-home menu-icon",
                color: "blue",
                textColor: "white",
                link: "/acceso/menu"
            },
            {
                name: "Usuario",
                icon: "mdi mdi-home menu-icon",
                color: "blue",
                textColor: "white",
                link: "/acceso/usuario"
            }

        ]
    }
]
export default rutas