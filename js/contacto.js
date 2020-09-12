export class ContactValid {
    constructor() {
        console.log('inicado contacto');
        this.fields = {};
        this.formulario = document.getElementById('contactForm');
        this.fields.name = document.getElementById('name_field');
        this.fields.company = document.getElementById('company_field');
        this.fields.email = document.getElementById('email_field');
        this.fields.message = document.getElementById('message_field');
        this.fields.button = document.getElementById('send_button');
        this.fields.errorField = document.querySelector(".error-fields");
        this.fields.spinner = document.querySelector(".spinner");
        this.fields.succesEmail = document.querySelector(".succesEmail");
        this.fields.errorEmail = document.querySelector(".errorEmail");
        this.createListeners();

    }

    createListeners() {

        this.fields.button.addEventListener('click', e => {
            e.preventDefault();
            this.validarFormulario(this.formulario);

        });
        this.fields.name.addEventListener('blur', (elemento) => {
            //console.log(elemento.target);
            this.quitarerror(elemento.target);
        });
        this.fields.company.addEventListener('blur', (elemento) => {
            //console.log(elemento.target);
            this.quitarerror(elemento.target);
        });
        this.fields.email.addEventListener('blur', (elemento) => {
            //console.log(elemento.target);
            this.quitarerror(elemento.target);
        });
        this.fields.message.addEventListener('blur', (elemento) => {
            //console.log(elemento.target);
            this.quitarerror(elemento.target);
        });
    }
    validaName() {
        if (!this.fields.name.checkValidity()) {
            console.log('error en nombre');
            this.error(this.fields.name);
            return false;
        }
        this.quitarerror(this.fields.name);
        return true;
    }
    validaCompany() {
        if (!this.fields.company.checkValidity()) {
            console.log('error en company');
            this.error(this.fields.company);
            return false;
        }
        this.quitarerror(this.fields.company);
        return true;
    }
    validaEmail() {
        if (!this.fields.email.checkValidity()) {
            console.log('error en email');
            this.error(this.fields.email);
            return false;
        }
        this.quitarerror(this.fields.email);
        return true;
    }
    validaMsg() {
        if (!this.fields.message.checkValidity()) {
            console.log('error en mensaje');
            this.error(this.fields.message);
            return false;
        }
        this.quitarerror(this.fields.message);
        return true;
    }
    validarFormulario(formulario) {
        if (this.validaName() && this.validaCompany() && this.validaEmail() && this.validaMsg()) {
            console.log('formulario valido completmente');
            this.fields.errorField.style.display = 'none';
            this.fields.button.disabled = true;
            this.fields.button.classList.add('botongris');
            this.crearFormData();
        } else {
            console.log('formulario invalido');
        }
    }
    error(element) {
        this.fields.errorField.style.display = 'block';
        this.fields.errorField.innerHTML = element.validationMessage;
        element.classList.add('errorInput');
        element.focus();
    }
    quitarerror(element) {
        element.classList.remove('errorInput');
    }
    crearFormData() {
        const form = this.formulario;
        const dataForm = new FormData(form);

        //enviando mensjae
        this.fields.spinner.style.display = "block";

        fetch('email.php', {
            method: 'POST',
            body: dataForm
        }).then(resp => {
            return resp.json();
        }).then(data => {

            if (data === 'true') {

                this.mensajeEnviado();
            } else {

                this.mensajeRechazado();
            }
        });
    }

    mensajeEnviado() {

        this.formulario.reset();
        console.log('mensaje enviado grache');
        this.fields.spinner.style.display = "none";
        this.fields.succesEmail.style.display = "block";

    }
    mensajeRechazado() {

        this.formulario.reset();
        console.log('intenta ,mas tarde please');
        this.fields.spinner.style.display = "none";
        this.fields.errorEmail.style.display = "block";
    }
}