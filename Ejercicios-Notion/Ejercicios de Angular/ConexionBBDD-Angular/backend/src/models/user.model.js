class user {
    constructor(nombre, primerApellido, segundoApellido, empresa, email, password) {
        this.nomre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.empresa = empresa;
        this.email = email;
        this.password = password;
    }
}

module.exports = user;