# Ecuadorian ID & RUC Validator Directive (AngularJS 1.x)

> Portfolio project by **Nicolás Velah**  
> AngularJS 1.x directive to validate Ecuadorian *cédula* (national ID) and *RUC* numbers.

---

## 🚀 Overview

This is a reusable **AngularJS 1.x directive** that validates **Ecuadorian national identity numbers (cédulas)** and **RUC (Registro Único de Contribuyentes)**.  
It can be integrated into forms to ensure that user input respects official validation rules (digit checks, format, province codes, etc.).

---

## 🧾 Features

- Validates **cédula** (10 digits) using the official algorithm (province codes, verification digit).  
- Validates **RUC** (13 digits) for companies and individuals, covering the rules for personal and corporate RUCs.  
- Works as an **AngularJS directive** (e.g. `ecuador-validator` or similar attribute) to bind validation to form fields.  
- Can be used in template-driven AngularJS forms to provide real-time validation feedback.  

---

## 🎯 Usage Example

```html
<form name="myForm">
  <label for="cedula">Cédula:</label>
  <input type="text" name="cedula" ng-model="user.cedula"
         ecuador-validator="cedula" required />
  <span ng-show="myForm.cedula.$error.ecuador">Invalid cédula number</span>

  <label for="ruc">RUC:</label>
  <input type="text" name="ruc" ng-model="user.ruc"
         ecuador-validator="ruc" required />
  <span ng-show="myForm.ruc.$error.ecuador">Invalid RUC number</span>
</form>
```

In your AngularJS module:

```js
angular.module('myApp', ['ecuadorValidatorModule']);
```

---

## 🛠️ Installation

Clone the repo and include the directive file in your AngularJS project:

```bash
git clone https://github.com/nicolasvelah/Directiva-para-validaci-n-de-Cedula-Ecuatoriana.git
```

Then import or load the JS file in your app:

```html
<script src="path/to/ecuador-validator.directive.js"></script>
```

Make sure your main Angular module depends on the directive’s module.

---

## ✅ Validation Rules (Summary)

- **Cédula**: 10 digits; first two digits (province) must be between valid codes; the 10th digit is a verification digit computed via modulo algorithm.  
- **RUC**: 13 digits; first 10 digits are effectively a cédula (for natural persons) or corporate identifier; last three digits check for “001” or branch codes; uses similar checksum logic.  

The directive applies these rules and marks the field invalid if they don’t match the criteria.

---

## 📁 Project Structure

```
directiva-cedula-ruc/
├── src/
│   └── ecuador-validator.directive.js
├── README.md
└── tests/ (if any)
```

---

## 👤 Author

This directive and associated code are authored by **Nicolás Velah**, as part of his portfolio work.  
It demonstrates attention to local validation logic, AngularJS form integration, and reusable frontend components.

---

## 📜 License

This project is the intellectual property of **Nicolás Velah**.  
It may be reused for educational or reference purposes.  
For production or commercial usage, explicit permission is required.

---

## 🤝 For Recruiters / Hiring Managers

This project illustrates:

- Ability to encode **country-specific validation logic** in frontend form controls.  
- Experience with **AngularJS 1.x directives** and form validation patterns.  
- Building **reusable UI components** for data integrity.  

It reflects competence in combining frontend frameworks with domain-specific requirements (e.g. national IDs).  
