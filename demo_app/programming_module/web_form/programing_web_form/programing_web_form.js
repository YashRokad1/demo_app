// frappe.ready(function() {
//     // Bind events here

//     frappe.web_form.after_load = () => {
//         frappe.web_form.on('Enable', (field, value) => {
//             frappe.msgprint('Hi User');
//         });

//         frappe.web_form.on('dob', (field, value) => {
//             if (value) {
//                 var dob = new Date+
// 				(value);
//                 var today = new Date();
//                 var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000)); // Corrected age calculation

//                 // Set the calculated age value to the 'age' field in the web form
//                 frappe.web_form.set_value("age", age.toString());
//             }
//         });
//     };
// });



frappe.ui.form.on('Client Side Scripting', {
	refresh: function(frm) {
			frappe.msgprint("Hello test this  'refresh' event ")
		}
	
});