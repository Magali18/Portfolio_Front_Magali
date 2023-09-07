const validate =(input)=>{
    let errors = {};

    if (!input.name) {
      errors.name = "Campo requerido";
    }
  
}
export default validate