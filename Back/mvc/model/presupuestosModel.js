const sequelize = require('../db/conexion')

module.exports = class presupuestosModel {
    constructor(presupuesto) {
        this.presupuesto = presupuesto
    }

    async select() {
        let result = await sequelize.query("SELECT * FROM presupuestos  ");
        return result
    }
    async find(presupuesto) {
        let result = await sequelize.query("SELECT * FROM presupuestos WHERE idPresupuesto = " + presupuesto.idPresupuesto);
        return result
    }
    async insert(presupuesto) {
        let result = await sequelize.query("INSERT INTO presupuestos (creacion,proyecto,[version]) VALUES ('" + presupuesto.date + "','" + presupuesto.proyecto + "', " + presupuesto.version + ")");
        console.log(result);
        if (result[0].length == 0) {
            let result = await sequelize.query("SELECT idPresupuesto,creacion,proyecto,[version] FROM presupuestos  WHERE creacion ='" + presupuesto.date + "' AND proyecto ='" + presupuesto.proyecto + "' AND [version] = " + presupuesto.version);
            return result
        }
        else {
            return false
        }
    }
    async update(presupuesto) {
        let result = await sequelize.query("UPDATE presupuestos SET [version] =" + presupuesto.version + " WHERE idPresupuesto =" + presupuesto.idPresupuesto);
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }
    async delete(presupuesto) {
        let result = await sequelize.query("DELETE FROM presupuestos WHERE idPresupuesto =" + presupuesto.idPresupuesto); console.log(result);
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }

    async selectFlujo(flujo) {
        let result = await sequelize.query("SELECT * FROM flujoEfectivo WHERE idPresupuesto = " + flujo.idPresupuesto);
        return result
    }
    async insertFlujo(flujo) {
        let result = await sequelize.query("INSERT INTO flujoEfectivo (idPresupuesto,mes,ingreso) VALUES (" + flujo.idPresupuesto + "," + flujo.mes + ", " + flujo.ingreso + ")");
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }
    async deleteFlujo(flujo) {
        let result = await sequelize.query("DELETE FROM flujoEfectivo WHERE idFlujo =" + flujo.idFlujo); console.log(result);
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }


    async selectIngreso(ingreso) {
        let result = await sequelize.query("SELECT * FROM ingresos WHERE idIngreso = " + ingreso.idPresupuesto);
        return result
    }
    async insertIngreso(ingreso) {
        let result = await sequelize.query("INSERT INTO ingresos (idPresupuesto,concepto,mes,ingreso) VALUES (" + ingreso.idPresupuesto + ",'" + ingreso.concepto + "', " + ingreso.mes + "," + ingreso.ingreso + ")");
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }
    async deletIngreso(ingreso) {
        let result = await sequelize.query("DELETE FROM ingresos WHERE idIngreso =" + ingreso.idIngreso); console.log(result);
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }

    async selectCosto(costo) {
        let result = await sequelize.query("SELECT * FROM costosDirectos WHERE idCosto = " + costo.idPresupuesto);
        return result
    }
    async insertCosto(costo) {
        let result = await sequelize.query("INSERT INTO costosDirectos (idPresupuesto,concepto,mes,costo) VALUES (" + costo.idPresupuesto + ",'" + costo.concepto + "', " + costo.mes + "," + costo.costo + ")");
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }
    async deleteCosto(costo) {
        let result = await sequelize.query("DELETE FROM costosDirectos WHERE idCosto =" + costo.idCosto); console.log(result);
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }

    async selectGasto(gasto) {
        let result = await sequelize.query("SELECT * FROM gastosAdministrativos WHERE idGasto = " + gasto.idPresupuesto);
        return result
    }
    async insertGasto(gasto) {
        let result = await sequelize.query("INSERT INTO gastosAdministrativos (idPresupuesto,concepto,mes,gasto) VALUES (" + gasto.idPresupuesto + ",'" + gasto.concepto + "', " + gasto.mes + "," + gasto.gasto + ")");
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }
    async deleteGasto(gasto) {
        let result = await sequelize.query("DELETE FROM gastosAdministrativos WHERE idGasto =" + gasto.idGasto); console.log(result);
        if (result[0].length == 0) {
            console.log(result);
            if (result[0].length == 0) {
                return result
            }
            else {
                return false
            }
        }
    }

    async selectRecurso(recurso) {
        let result = await sequelize.query("SELECT * FROM recursos WHERE idRecurso = " + recurso.idPresupuesto);
        return result
    }
    async insertRecurso(recurso) {
        let result = await sequelize.query("INSERT INTO recursos (idPresupuesto,rol,recurso,porcentaje,mes) VALUES (" + recurso.idPresupuesto + "," + recurso.rol + ", " + recurso.recurso + "," + recurso.porcentaje + "," + recurso.mes + ")");
        console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }
    async deleteRecurso(recurso) {
        let result = await sequelize.query("DELETE FROM recursos WHERE idRecurso =" + recurso.idRecurso); console.log(result);
        if (result[0].length == 0) {
            return result
        }
        else {
            return false
        }
    }

}


// idFlujo INT NOT NULL IDENTITY (1,1),
// idPresupuesto INT NOT NULL,
// mes INT NOT NULL,
// ingreso FLOAT NOT NULL,
// PRIMARY KEY (idFlujo),
// FOREIGN KEY(idPresupuesto) REFERENCES presupuestos(idPresupuesto)]