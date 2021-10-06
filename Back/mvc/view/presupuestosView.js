const presupuestosController = require('../controller/presupuestosController')
const validation = require('../middleware/validation')
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {

    app.get('/presupuestos/select', autentication.userAutentication, async (req, res) => {
        res.send(await presupuestosController.select());
    });
    app.get('/presupuestos/find', autentication.userAutentication, async (req, res) => {
        let presupuesto = req.body;
        res.send(await presupuestosController.find(presupuesto));
    });
    app.post('/presupuestos/insert', autentication.userAutentication, async (req, res) => {
        let presupuesto = req.body;
        res.send(await presupuestosController.insert(presupuesto));
    });
    app.post('/presupuestos/update', autentication.userAutentication, async (req, res) => {
        let presupuesto = req.body;
        res.send(await presupuestosController.update(presupuesto));
    });
    app.delete('/presupuestos/delete', autentication.userAutentication, async (req, res) => {
        let presupuesto = req.body;
        res.send(await presupuestosController.delete(presupuesto));
    });


    app.get('/presupuestos/selectFlujo', autentication.userAutentication, async (req, res) => {
        let flujo = req.body;
        res.send(await presupuestosController.selectFlujo(flujo));
    });
    app.post('/presupuestos/insertFlujo', autentication.userAutentication, async (req, res) => {
        let flujo = req.body;
        res.send(await presupuestosController.insertFlujo(flujo));
    });
    app.delete('/presupuestos/deleteFlujo', autentication.userAutentication, async (req, res) => {
        let flujo = req.body;
        res.send(await presupuestosController.deleteFlujo(flujo));
    });

    app.get('/presupuestos/selectIngreso', autentication.userAutentication, async (req, res) => {
        let ingreso = req.body;
        res.send(await presupuestosController.selectIngreso(ingreso));
    });
    app.post('/presupuestos/insertIngreso', autentication.userAutentication, async (req, res) => {
        let ingreso = req.body;
        res.send(await presupuestosController.insertIngreso(ingreso));
    });
    app.delete('/presupuestos/deleteIngreso', autentication.userAutentication, async (req, res) => {
        let ingreso = req.body;
        res.send(await presupuestosController.deleteIngreso(ingreso));
    });

    app.get('/presupuestos/selectCosto', autentication.userAutentication, async (req, res) => {
        let costo = req.body;
        res.send(await presupuestosController.selectCosto(costo));
    });
    app.post('/presupuestos/insertCosto', autentication.userAutentication, async (req, res) => {
        let costo = req.body;
        res.send(await presupuestosController.insertCosto(costo));
    });
    app.delete('/presupuestos/deleteCosto', autentication.userAutentication, async (req, res) => {
        let costo = req.body;
        res.send(await presupuestosController.deleteCosto(costo));
    });

    app.get('/presupuestos/selectGasto', autentication.userAutentication, async (req, res) => {
        let gasto = req.body;
        res.send(await presupuestosController.selectGasto(gasto));
    });
    app.post('/presupuestos/insertGasto', autentication.userAutentication, async (req, res) => {
        let gasto = req.body;
        res.send(await presupuestosController.insertGasto(gasto));
    });
    app.delete('/presupuestos/deleteGasto', autentication.userAutentication, async (req, res) => {
        let gasto = req.body;
        res.send(await presupuestosController.deleteGasto(gasto));
    });

    app.get('/presupuestos/selectRecurso', autentication.userAutentication, async (req, res) => {
        let recurso = req.body;
        res.send(await presupuestosController.selectRecurso(recurso));
    });
    app.post('/presupuestos/insertRecurso', autentication.userAutentication, async (req, res) => {
        let recurso = req.body;
        res.send(await presupuestosController.insertRecurso(recurso));
    });
    app.delete('/presupuestos/deleteRecurso', autentication.userAutentication, async (req, res) => {
        let recurso = req.body;
        res.send(await presupuestosController.deleteRecurso(recurso));
    });


};