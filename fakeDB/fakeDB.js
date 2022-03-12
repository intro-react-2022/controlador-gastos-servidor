export default class FakeDB {
  static usuarios = [
    {
      idUsuario: 1,
      nombres: "Helena",
      apellidos: "Grisky",
      documentoIdentidad: "72870798",
      correo: "griskyh@gmail.com",
      direccion: "",
      ocupacion: "",
      fechaNacimiento: "",
      sectorLaboral: "",
      telefono: "6562974999951",
      contrasenia: "1234",
      imagen: "https://randomuser.me/api/portraits/med/women/28.jpg",
    },
    {
      idUsuario: 2,
      nombre: "Josué",
      apellidos: "Laque",
      documentoIdentidad: "222589451214",
      correo: "josue@aeditip.com",
      direccion: "",
      ocupacion: "",
      fechaNacimiento: "",
      sectorLaboral: "",
      telefono: "6562974999951",
      contrasenia: "1234",
      imagen: "https://randomuser.me/api/portraits/med/men/23.jpg",
    },

    {
      idUsuario: 3,
      nombre: "Jorge Fatama",
      apellidos: "Fatama",
      documentoIdentidad: "3218854785",
      correo: "jorge@aeditip.com",
      direccion: "",
      ocupacion: "",
      fechaNacimiento: "",
      sectorLaboral: "",
      telefono: "6562974999951",
      contrasenia: "1234",
      imagen: "https://randomuser.me/api/portraits/med/men/30.jpg",
    },
  ];
  static actividad = [
    {
      idUsuario: 1,
      idActividad: 1,
      denominacion: "Dia navideño",
      monto: 2405,
      fecha: new Date(),
    },
    {
      idUsuario: 1,
      idActividad: 2,
      denominacion: "Viaje a Rusia 2018",
      monto: 1800,
      fecha: new Date(),
    },
    {
      idUsuario: 1,
      idActividad: 3,
      denominacion: "Dia de San Calentin",
      monto: -320,
      fecha: new Date(),
    },
  ];
  static transaccion = [
    {
      idActividad: 1,
      idTransaccion: 1,
      denominacion: "Cobro alquiler inmueble",
      monto: 150,
      esIngreso: true,
    },
    {
      idActividad: 1,
      idTransaccion: 2,
      denominacion: "Salida familiar",
      monto: 250,
      esIngreso: false,
    },
    {
      idActividad: 1,
      idTransaccion: 3,
      denominacion: "Compra combustible",
      monto: 45,
      esIngreso: false,
    },
    {
      idActividad: 1,
      idTransaccion: 4,
      denominacion: "Compra bebidas",
      monto: 50,
      esIngreso: false,
    },
    {
      idActividad: 1,
      idTransaccion: 5,
      denominacion: "Compra pavo",
      monto: 450,
      esIngreso: false,
    },
    {
      idActividad: 1,
      idTransaccion: 6,
      denominacion: "Cobro deuda freelance",
      monto: 550,
      esIngreso: true,
    },
    {
      idActividad: 1,
      idTransaccion: 7,
      denominacion: "Gratificaciones",
      monto: 2500,
      esIngreso: true,
    },
    //next
    {
      idActividad: 2,
      idTransaccion: 8,
      denominacion: "Compra boletos estadios",
      monto: 2150,
      esIngreso: false,
    },
    {
      idActividad: 2,
      idTransaccion: 9,
      denominacion: "Reservaciones hotel",
      monto: 1250,
      esIngreso: false,
    },
    {
      idActividad: 2,
      idTransaccion: 10,
      denominacion: "Venta software web",
      monto: 2500,
      esIngreso: true,
    },
    {
      idActividad: 2,
      idTransaccion: 11,
      denominacion: "Compra equipajes",
      monto: 750,
      esIngreso: false,
    },
    {
      idActividad: 2,
      idTransaccion: 12,
      denominacion: "Compra pasajes aéreos",
      monto: 6550,
      esIngreso: false,
    },
    {
      idActividad: 2,
      idTransaccion: 13,
      denominacion: "Liquidación y beneficios sociales",
      monto: 2500,
      esIngreso: true,
    },
    {
      idActividad: 2,
      idTransaccion: 14,
      denominacion: "Sueldo empresa",
      monto: 7500,
      esIngreso: true,
    },
    //next
    {
      idActividad: 3,
      idTransaccion: 15,
      denominacion: "Pago servicio hotel",
      monto: 250,
      esIngreso: false,
    },
    {
      idActividad: 3,
      idTransaccion: 16,
      denominacion: "Salida cine",
      monto: 350,
      esIngreso: false,
    },
    {
      idActividad: 3,
      idTransaccion: 17,
      denominacion: "Compra combustible",
      monto: 150,
      esIngreso: false,
    },
    {
      idActividad: 3,
      idTransaccion: 18,
      denominacion: "Compra bebidas",
      monto: 70,
      esIngreso: false,
    },
    {
      idActividad: 3,
      idTransaccion: 19,
      denominacion: "Compra regalos",
      monto: 1450,
      esIngreso: false,
    },
    {
      idActividad: 3,
      idTransaccion: 20,
      denominacion: "Cobro trabajo freelance",
      monto: 2000,
      esIngreso: true,
    },
    {
      idActividad: 3,
      idTransaccion: 21,
      denominacion: "Reservación hotel",
      monto: 50,
      esIngreso: false,
    },
  ];
  static idUsuarioActual = FakeDB.usuarios.length;
  static idActividadActual = FakeDB.actividad.length;
  static idTransaccionActual = FakeDB.transaccion.length;

  // USUARIOS
  static getUsuarioByID = (idUsuario) => {
    const usuarioEncontrado = FakeDB.usuarios.filter(
      (x) => x.idUsuario === idUsuario
    );
    if (usuarioEncontrado.length === 1) {
      return {
        ok: true,
        message: "El usuario fue encontrado",
        payload: usuarioEncontrado[0],
      };
    } else {
      if (usuarioEncontrado.length > 1) {
        return {
          ok: false,
          message: "Error inesperado",
          payload: {},
        };
      } else {
        return {
          ok: false,
          message: "No se encontro al usuario",
          payload: {},
        };
      }
    }
  };
  static updateUsuario = (idUsuario, usuarioNuevo) => {
    const indice = 0;
    const usuarioEncontrado = FakeDB.usuarios.filter((x) => {
      if (x.idUsuario == idUsuario) {
        return x;
      }
      indice++;
    });
    if (usuarioEncontrado.length === 1) {
      //update
      const usuarioActualizado = { ...usuarioEncontrado, ...usuarioNuevo };
      FakeDB.usuarios[indice] = usuarioActualizado;
      return {
        ok: true,
        message: "El usuario fue actualizado correctamente",
        payload: usuarioActualizado,
      };
    } else {
      if (usuarioEncontrado.length > 1) {
        return {
          ok: false,
          message: "Error inesperado",
          payload: {},
        };
      } else {
        return {
          ok: false,
          message: "No se encontro al usuario",
          payload: {},
        };
      }
    }
  };
  static deleteUsuario = (idUsuario) => {
    const indice = 0;
    const usuarioEncontrado = FakeDB.usuarios.filter((x) => {
      if (x.idUsuario === idUsuario) {
        return x;
      }
      indice++;
    });
    if (usuarioEncontrado.length === 1) {
      //delete
      FakeDB.usuarios = FakeDB.usuarios.filter(
        (x) => x.idUsuario !== idUsuario
      );
      return {
        ok: true,
        message: "El usuario fue eliminado correctamente",
        payload: idUsuario,
      };
    } else {
      if (usuarioEncontrado.length > 1) {
        return {
          ok: false,
          message: "Error inesperado",
          payload: {},
        };
      } else {
        return {
          ok: false,
          message: "No se encontro al usuario",
          payload: {},
        };
      }
    }
  };
  static insertUsuario = (nuevoUsuario) => {
    const nuevoUsuarioConID = {
      ...nuevoUsuario,
      id: FakeDB.idUsuarioActual + 1,
    };
    FakeDB.idUsuarioActual++;
    FakeDB.usuarios = [...FakeDB.usuarios, nuevoUsuarioConID];
    return {
      ok: true,
      message: "El usuario se ha creado correctamente",
      payload: nuevoUsuarioConID,
    };
  };
  static listarUsuario = () => {
    return {
      ok: true,
      message: "Todos los usuarios",
      payload: FakeDB.usuarios,
    };
  };
  static iniciarSesion = (correo, contrasenia) => {
    if(!correo || !contrasenia || correo.length===0 || contrasenia.length===0){
      return {
        ok: false,
        message: "Credenciales incorrectas o vacías",
        payload: {},
      };
    }
    const usuarioEncontrado = FakeDB.usuarios.filter(
      (x) => x.correo === correo
    );
    if (usuarioEncontrado && usuarioEncontrado.length === 1) {
      //preguntamos contraseña
      if (usuarioEncontrado[0].contrasenia === contrasenia) {
        return {
          ok: true,
          message: "Inicio de sesión correcto",
          payload: { ...usuarioEncontrado[0], contrasenia: undefined },
        };
      }else{
        return {
          ok: false,
          message: "Contraseña incorrecta",
          payload: {},
        };
      }
    } else {
      return {
        ok: false,
        message: "Correo incorrecto",
        payload: {},
      };
    }
  };
  //ACTIVIDAD
  static listarActividades = () => {
    return {
      ok: true,
      message: "Todos las transacciones",
      payload: FakeDB.actividad,
    };
  };
  static listarActividadXidUsuario = (idUsuario) => {
    if (idUsuario) {
      return {
        ok: true,
        message: "Todos las actividades cuyo id de usuario es " + idUsuario,
        payload: FakeDB.actividad.filter((x) => x.idUsuario == idUsuario),
      };
    } else {
      return {
        ok: false,
        message: "No se envio un id de usuario",
        payload: [],
      };
    }
  };
  static insertarActividad = (
    idUsuario,
    denominacion,
    monto,
    transacciones
  ) => {
    if (
      !idUsuario ||
      !denominacion ||
      !monto ||
      !transacciones ||
      transacciones.length === 0
    ) {
      return {
        ok: false,
        message: "Datos incorrectos",
        payload: {},
      };
    } else {
      const fechaActual = new Date();
      const nuevaActividad = {
        idActividad: FakeDB.idActividadActual + 1,
        idUsuario,
        denominacion,
        monto,
        fecha: fechaActual,
      };
      FakeDB.idActividadActual += 1;
      FakeDB.actividad = [...FakeDB.actividad, nuevaActividad];

      const nuevasTransaacciones = transacciones.map((tx) => {
        const nuevaTX = {
          ...tx,
          idActividad: FakeDB.idActividadActual,
          idTransaccion: FakeDB.idTransaccionActual + 1,
        };
        FakeDB.idTransaccionActual = +1;
        return nuevaTX;
      });
      FakeDB.transaccion = [...FakeDB.transaccion, ...nuevasTransaacciones];
      return {
        ok: true,
        message: "Se insertó correctamente la actividad",
        payload: {
          actividad: nuevaActividad,
          transacciones: nuevasTransaacciones,
        },
      };
    }
  };
  //TRANSACCIONES
  static insertarTransaccion = (nuevaTransaccion) => {
    console.log("INSERT TX", nuevaTransaccion);
    if (nuevaTransaccion) {
      const nuevaTransaccionConID = {
        ...nuevaTransaccion,
        idTransaccion: FakeDB.idTransaccionActual + 1,
      };
      FakeDB.idTransaccionActual++;
      FakeDB.transaccion = [...FakeDB.transaccion, nuevaTransaccionConID];
      return {
        ok: true,
        message: "La Transaccion se ha creado correctamente",
        payload: nuevaTransaccionConID,
      };
    } else {
      return {
        ok: false,
        message: "No se envio data",
        payload: {},
      };
    }
  };
  static listarTransacciones = () => {
    return {
      ok: true,
      message: "Todos las transacciones",
      payload: FakeDB.transaccion,
    };
  };
  static listarTransaccionesXidActividad = (idActividad) => {
    if (idActividad) {
      return {
        ok: true,
        message:
          "Todos las transacciones cuyo id de actividad es " + idActividad,
        payload: FakeDB.transaccion.filter((x) => x.idActividad == idActividad),
      };
    } else {
      return {
        ok: false,
        message: "No se envió ningun id de actividad",
        payload: [],
      };
    }
  };
}
