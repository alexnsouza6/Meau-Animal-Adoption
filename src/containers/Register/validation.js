
export const validationDictionary = {

  full_name: {
    presence: {
      allowEmpty: false,
      message: "^Campo obrigatório"
    },
    length: {
      minimum: 5,
      message: "^Nome deve ter no mínimo 5 caracteres"
    }
  },
  
  age: {
    presence: {
      allowEmpty: false,
      message: "^Campo obrigatório"
    },
    numericality: {
      greaterThan: 0,
      onlyInteger: true,
      message: "^Deve ser maior que 0"
    }
  },

  email: {
    presence: {
      allowEmpty: false,
      message: "^Campo obrigatório"
    },
    email: {
      message: "^Endereço de email deve ser válido"
    }
  },


  password: {
    presence: {
      allowEmpty: false,
      message: "^Campo obrigatório"
    },
    length: {
      minimum: 6,
      message: "^Senha deve ter no mínimo 6 caracteres"
    }
  },

  city: {
    presence: {
      allowEmpty: false,
      message: "^Campo obrigatório"
    }
  },

  address: {
    presence: {
      allowEmpty: false,
      message: "^Campo obrigatório"
    }
  },

  username: {
    presence: {
      allowEmpty: false,
      message: "^Campo obrigatório"
    }
  },


  phone: {
    presence: {
      allowEmpty: false,
      message: "^Campo obrigatório"
    },
    format: {
      pattern: /^[2-9]\d{2}-\d{3}-\d{4}$/,
      message: "^Número de telefone deve ser válido"
    }
  },

  city_state: {
    presence: {
      allowEmpty: false,
      message: "^Campo obrigatório"
    },
    inclusion: {
      within: [
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO"
      ],
      message: "^Sigla do estado deve estar correta"
    }
  },

};