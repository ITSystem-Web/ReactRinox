import React from "react";
import './MyForma.css'



class Forma extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      phone: '',
      formErrors: { email: '', phone: '' },
      emailValid: false,
      phoneValid: false,
      formValid: false,
      tick: false



    }

    this.handleUserInput = this.handleUserInput.bind(this)


  }
  onChange = b => {
    this.setState({ tick: b.target.checked })
  }





  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }


  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email-ul Nu este Valid';
        break;
      case 'phone':
        phoneValid = value.length >= 9;
        fieldValidationErrors.phone = phoneValid ? '' : ' Nr.telefon trebuie sa fie minim 9 cifre';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      phoneValid: phoneValid
    }, this.validateForm);
  }
  validateForm() {
    this.setState({
      formValid: this.state.emailValid &&
        this.state.phoneValid
    });
  }


  errorclass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }




  render() {
    const { tick } = this.state

    return (
      <div >
        <form action="send-contact.php" method="POST" className="form modalform" id="toForm">
          <div className="form-title">Formular</div>



          <div className={` row ${this.errorclass(this.state.formErrors.email)}`}>
            <input onChange={this.handleUserInput} type="email" value={this.state.email} name="email" id="" placeholder="E-mail" required />

          </div>
          <div className={` row ${this.errorclass(this.state.formErrors.phone)}`}>
            <input onChange={this.handleUserInput} type="tel" value={this.state.phone} name="phone" id="" placeholder="Nr.Telefon" required />

          </div>

          <div className=" row">
            <textarea type="text" name="phone" id="" placeholder="Mesaj" required />

          </div>
          <div className="panel panel-default" style={{ color: "red" }}>
            <FormErrors formErrors={this.state.formErrors} />
          </div>

          <label className="l-checkbox">Am luat cunostință și sunt de acord cu politica de prelucrare a datelor cu caracter personal.
            <input
              type="checkbox" checked={tick} required onClick={this.onChange} />
            <span></span>
          </label>
          <div>{tick === false ? <p style={{ color: "red", fontSize: "12px" }}>Acceptati termenii si conditiile</p> : ""} </div>






          <div>
            <input type="hidden" name="utm_source" value="" />
            <input type="hidden" name="utm_medium" value="" />
            <input type="hidden" name="utm_campaign" value="" />
            <input type="hidden" name="utm_content" value="" />
            <input type="hidden" name="utm_term" value="" />
            <button className="form-button" type="submit"   >Comanda Acum</button>
          </div>
        </form>




      </div>

    )

  }




}

export default Forma;


export const FormErrors = ({ formErrors }) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={i}> {formErrors[fieldName]}</p>
        )
      } else {
        return '';
      }
    })}
  </div>
