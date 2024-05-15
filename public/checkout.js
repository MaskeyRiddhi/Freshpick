// import F from './functions.js';
// // Contador de la cantidad de items en el carrito de compras
// let counters = {
//     qtyBackbag: '1',
//     qtyShoes: '1'
// };
// const total = document.querySelector('.quantity__total'),
//       containerBtns = document.querySelectorAll('.item__cont__btns');

// containerBtns.forEach(function(cont) {
//     const inputNum = cont.querySelector('input[type=number]'),
//           minusBtn = cont.querySelector('.item__btn--minus'),
//           plusBtn = cont.querySelector('.item__btn--plus');
          
// // Asigna eventos a los botones de las cantidades de items
//     minusBtn.addEventListener('click', function() {
//         if (parseInt(inputNum.value) > 1) {
//             inputNum.value = parseInt(inputNum.value) - 1;

//             this.classList.add('item__btn--minus--active');
//             setTimeout(() => this.classList.remove('item__btn--minus--active'), 65);
//         }


//         F.determineInput(inputNum, counters);

//         F.setTotal(total, counters);
//     });

//     plusBtn.addEventListener('click', function() {
//         if (parseInt(inputNum.value) < 100) {
//             inputNum.value = parseInt(inputNum.value) + 1;
            
//             this.classList.add('item__btn--plus--active');
//             setTimeout(() => this.classList.remove('item__btn--plus--active'), 65);
//         }


//         F.determineInput(inputNum, counters);

//         F.setTotal(total, counters);
//     });
// });


// // Control de comportamiento del formulario
// const form = document.querySelector('.form'),
//       fieldsTxt = document.querySelectorAll('.field--text'),
//       selectInput = document.querySelector('.select__shipping'),
//       inputCheckbox = document.querySelector('input[type=checkbox]');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     Swal.fire({
//         icon: 'success',
//         title: 'Datos enviados',
//         text: 'Formulario enviado exitosamente.'
//     });

//     F.byDefault(inputCheckbox, counters, containerBtns, total, selectInput, form);
// });
// // document.querySelector('input[type=checkbox]')
// // checkbox, counters, containerBtns, total, form

// // Apenas se hace click encima de la etiqueta <p></p> que envuelve al input en el formulario, se enfoca su input hijo
// fieldsTxt.forEach(field => {
//     field.addEventListener('click', function() {
//         this.querySelector('.input--text').focus();
//     });
// });

// // Cuando ocurre un cambio en el valor del select del formulario, se ejecuta la función 'defaultSelect'
// selectInput.addEventListener('change', function() {
//     F.defaultSelect(this, this.value);
// });
// F.defaultSelect(selectInput);

// // Link del footer
// const footerLink = document.querySelector('.footer__link');
// F.randomLink(footerLink);

// // Ejecución constante de randomLink cada 5 segundos
// setInterval(() => {
//     F.randomLink(footerLink);
// }, 5000);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const minusButtons = document.querySelectorAll('.minus');
    const plusButtons = document.querySelectorAll('.plus');

    // Handle quantity changes
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.nextElementSibling;
            let quantity = parseInt(input.value, 10);
            if (quantity > 1) {
                input.value = quantity - 1;
            }
            updateTotal();
        });
    });

    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            let quantity = parseInt(input.value, 10);
            input.value = quantity + 1;
            updateTotal();
        });
    });

    // Calculate the total price
    function updateTotal() {
        const basePrices = [100, 100]; // Assuming each item costs Rs 100
        let total = 20; // Starting with shipping cost
        document.querySelectorAll('.i-input').forEach((input, index) => {
            total += basePrices[index] * parseInt(input.value, 10);
        });
        document.querySelector('.total').textContent = `Rs ${total}`;
    }

//     // checkout.js snippet for form submission
// form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const email = form.querySelector('input[name="email"]').value;
//     const phone = parseInt(form.querySelector('input[name="phone"]').value.replace(/[^\d]/g, ""), 10);  // Cleans phone input and converts to Number
//     const name = form.querySelector('input[name="name"]').value;
//     const address = form.querySelector('input[name="address"]').value;
//     const city = form.querySelector('input[name="city"]').value;
//     const country = form.querySelector('select[name="country"]').value;

//     const orderDetails = {
//         email,
//         phone,
//         name,
//         address,
//         city,
//         country,
//     };

//     try {
//         const response = await fetch('/api/orders', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(orderDetails)
//         });

//         if (response.ok) {
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Order Placed!',
//                 text: 'Your order has been successfully submitted.',
//             }).then(() => {
//                 window.location.href = 'final.html';
//             });
//         } else {
//             throw new Error('Failed to place order');
//         }
//     } catch (error) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: error.message,
//         });
//     }
// });


// //     // Submit the form data to the server
// //     form.addEventListener('submit', async (event) => {
// //         event.preventDefault();

// //         const email = form.querySelector('input[name="email"]').value;
// //         const phone = form.querySelector('input[name="phone"]').value;
// //         const name = form.querySelector('input[name="name"]').value;
// //         const address = form.querySelector('input[name="address"]').value;
// //         const city = form.querySelector('input[name="city"]').value;
// //         const country = form.querySelector('select[name="country"]').value;

// //         const orderDetails = {
// //             email,
// //             phone,
// //             name,
// //             address,
// //             city,
// //             country,
// //             items: [
// //                 {
// //                     item: 'Orange',
// //                     quantity: parseInt(document.querySelector('input[name="bb-qty"]').value, 10),
// //                 },
// //                 {
// //                     item: 'Watermelon',
// //                     quantity: parseInt(document.querySelector('input[name="s-qty"]').value, 10),
// //                 }
// //             ],
// //             total: document.querySelector('.total').textContent
// //         };

// //         try {
// //             const response = await fetch('/submit-order', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify(orderDetails)
// //             });

// //             if (response.ok) {
// //                 Swal.fire({
// //                     icon: 'success',
// //                     title: 'Order Placed!',
// //                     text: 'Your order has been successfully submitted.',
// //                 }).then(() => {
// //                     window.location.href = 'final.html';
// //                 });
// //             } else {
// //                 throw new Error('Failed to place order');
// //             }
// //         } catch (error) {
// //             Swal.fire({
// //                 icon: 'error',
// //                 title: 'Error',
// //                 text: error.message,
// //             });
// //         }
// //     });
});
