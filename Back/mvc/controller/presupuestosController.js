const presupuestosModel = require('../model/presupuestosModel')



module.exports.select = async () => {
    let response = new presupuestosModel();
    let result = await response.select()
    return result;
}
module.exports.find = async (presupuesto) => {
    let response = new presupuestosModel();
    let result = await response.find(presupuesto)
    return result;
}
module.exports.insert = async (presupuesto) => {
    let response = new presupuestosModel();
    let result = await response.insert(presupuesto)
    return result;
}
module.exports.update = async (presupuesto) => {
    let response = new presupuestosModel();
    let result = await response.update(presupuesto)
    return result;
}
module.exports.delete = async (presupuesto) => {
    let response = new presupuestosModel();
    let result = await response.delete(presupuesto)
    return result;
}

module.exports.selectFlujo = async (flujo) => {
    let response = new presupuestosModel();
    let result = await response.selectFlujo(flujo)
    return result;
}
module.exports.insertFlujo = async (flujo) => {
    let response = new presupuestosModel();
    let result = await response.insertFlujo(flujo)
    return result;
}
module.exports.deleteFlujo = async (flujo) => {
    let response = new presupuestosModel();
    let result = await response.deleteFlujo(flujo)
    return result;
}

module.exports.selectIngreso = async (ingreso) => {
    let response = new presupuestosModel();
    let result = await response.selectIngreso(ingreso)
    return result;
}
module.exports.insertIngreso = async (ingreso) => {
    let response = new presupuestosModel();
    let result = await response.insertIngreso(ingreso)
    return result;
}
module.exports.deleteIngreso = async (ingreso) => {
    let response = new presupuestosModel();
    let result = await response.deleteIngreso(ingreso)
    return result;
}

module.exports.selectCosto = async (costo) => {
    let response = new presupuestosModel();
    let result = await response.selectCosto(costo)
    return result;
}
module.exports.insertCosto = async (costo) => {
    let response = new presupuestosModel();
    let result = await response.insertCosto(costo)
    return result;
}
module.exports.deleteCosto = async (costo) => {
    let response = new presupuestosModel();
    let result = await response.deleteCosto(costo)
    return result;
}

module.exports.selectGasto = async (gasto) => {
    let response = new presupuestosModel();
    let result = await response.selectGasto(gasto)
    return result;
}
module.exports.insertGasto = async (gasto) => {
    let response = new presupuestosModel();
    let result = await response.insertGasto(gasto)
    return result;
}
module.exports.deleteGasto = async (gasto) => {
    let response = new presupuestosModel();
    let result = await response.deleteGasto(gasto)
    return result;
}

module.exports.selectRecurso = async (recurso) => {
    let response = new presupuestosModel();
    let result = await response.selectRecurso(recurso)
    return result;
}
module.exports.insertRecurso = async (recurso) => {
    let response = new presupuestosModel();
    let result = await response.insertRecurso(recurso)
    return result;
}
module.exports.deleteRecurso = async (recurso) => {
    let response = new presupuestosModel();
    let result = await response.deleteRecurso(recurso)
    return result;
}
