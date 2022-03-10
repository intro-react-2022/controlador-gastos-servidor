// const express = require("express");
// const fileUpload = require("express-fileupload");
// const cors = require("cors");
// const bodyParser = require("body-parser");
//const morgan = require("morgan");
//const _ = require("lodash");
//const { FakeDB } = require("./fakeDB/fakeDB");
import express from "express";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import morgan from "morgan";
import FakeDB from "./fakeDB/fakeDB.js";

const app = express();

// enable files upload
app.use(fileUpload({ createParentPath: true }));
//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//start app
const port = process.env.PORT || 2800;

app.listen(port, () => console.log(`App is listening on port ${port}.`));
app.post("/upload-my-file", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
        payload: {},
      });
    } else {
      //Use the name of the input field (i.e. "file") to retrieve the uploaded file
      let file = req.files.file;
      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      file.mv("./uploads/" + file.name);
      //send response
      res.send({
        status: true,
        message: "File was uploaded successfully",
        payload: {
          name: file.name,
          mimetype: file.mimetype,
          size: file.size,
          path: "/files/uploads/",
          url: "https://my-ftp-server.com/bjYJGFYgjfVGHVb",
        },
      });
    }
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Unspected problem",
      payload: {},
    });
  }
});

app.get("/", (req, res) => {
  res.send({
    status: true,
    message: "Server is working!",
    payload: {},
  });
});

app.get("/usuario", (req, res) => {
  res.send(FakeDB.listarUsuario());
});

app.get("/actividad", (req, res) => {
  res.send(FakeDB.listarActividades());
});

app.post("/actividad", (req, res) => {
  const { idUsuario, denominacion, monto, transacciones } = req.body;
  res.send(
    FakeDB.insertarActividad(idUsuario, denominacion, monto, transacciones)
  );
});
//OK
app.get("/actividad/:idUsuario", (req, res) => {
  const { idUsuario } = req.params;
  res.send(FakeDB.listarActividadXidUsuario(idUsuario));
});

app.get("/transaccion", (req, res) => {
  res.send(FakeDB.listarTransacciones());
});

app.post("/transaccion", (req, res) => {
  const { idActividad, transaccion } = req.body;
  console.log("BODY", req.body);
  res.send(FakeDB.insertarTransaccion(idActividad, transaccion));
});

app.get("/transaccion/:idActividad", (req, res) => {
  const { idActividad } = req.params;
  res.send(FakeDB.listarTransaccionesXidActividad(idActividad));
});
