// Copyright (c) 2024, demo and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Client Side Scripting', {
// 	refresh: function(frm) {

// 		frappe.msgprint("Hello Yash")

// 	}
// });



// frappe.ui.form.on('Client Side Scripting', {
// 	refresh: function(frm) {

// 		frappe.throw("This page is a error")

// 	}
// });


			/////////////////////
			////// EVENT ////////
			//////////////////// 
			
//frappe.ui.form.on('Client Side Scripting', {
	// refresh: function(frm) {
	// 	frappe.msgprint("Hello test this  'refresh' event ")
	// }

	// onload: function(frm) {
	// 	frappe.msgprint("Hello test from  'onload' event ")
	// }

// 	// validate: function(frm) {
// 	// 	frappe.throw("Hello test from  'validate' event ")
// 	// }

// 	// before_save: function(frm){
// 	// 	frappe.throw("Hello test from 'befor save ' event")
// 	// }

// 	// after_save: function(frm){
// 	// 	frappe.throw("Hello test from 'after save ' event")
// 	// }

// 	// enable: function(frm){
// 	// 	frappe.throw("Hello test from ' enable ' event")
// 	// }

// 	// enable: function(frm){
// 	// 	frappe.msgprint("Hello test from ' enable ' event")
// 	// }

// 	// age: function(frm){
// 	// 	frappe.msgprint("Hello test from 'age ' event")
// 	// }

	
// 	// family_members_on_form_rendered: function(frm){
// 	// 	frappe.msgprint("Hello test from 'family member childe table rendered ' event")
// 	// }

	
// 	// before_submit: function(frm){
// 	// 	frappe.throw("Hello test from ' before submit ' event")
// 	// }

// 	// on_submit: function(frm){
// 	// 	frappe.msgprint("Hello test from ' on submit ' event")
// 	// }

// 	// before_cancel: function(frm){
// 	// 	frappe.throw("Hello test from ' before cansel ' event")
// 	// }

// 	after_cancel: function(frm){
// 		frappe.msgprint("Hello test from ' cansel ' event")
// 	}
//});


	////////child doctype/////////////

// frappe.ui.form.on('Family Members', {
// 	name1: function(frm) {
// 		frappe.msgprint("Hello test from child doctyper ")
// 	}

// 	,
// 	age: function(frm) {
// 		frappe.msgprint("Hello test from child doctyper ")
// 	}
// })

      //////////////////value fetching/////////////////
// frappe.ui.form.on('Client Side Scripting', {
// 	after_save:function(frm){
// 		frappe.msgprint(__("The full name is '{0}'",
// 			[frm.doc.first_name +" "+ frm.doc.middle_name +" "+ frm.doc.last_name]))

//         for (let row of frm.doc.family_members) {
//             frappe.msgprint(__("{0}. the family membrer name is '{1}'  and realation is '{2}' ",
//                 [row.idx,row.name1,row.relation]))
            
//         }
// 	}
// })


        ///////////////set intro  &&  is new //////////////////////
// frappe.ui.form.on('Client Side Scripting', {
//     refresh:function(frm){
//         // frm.set_intro('Now you can create a new Client a  new  Client side scripting doctype ')
//         if(frm.is_new()){
//         frm.set_intro('Now you can create a new Client a  new  Client side scripting doctype ')
//         }
//     }
// })


   ////////////////// set_value & add_child /////////////////

//    frappe.ui.form.on('Client Side Scripting', {
//         validate: function(frm){
//             // frm.set_value('full_name',frm.doc.first_name +" "+ frm.doc.middle_name +" "+ frm.doc.last_name)
//             let row = frm.add_child('family_members', {
//                 name1: 'meet',
//                 relation: 'bhai',
//                 age: 56,
//             })
//         }

//    })
   

   ////////////////// set_df_property //////////////////
// frappe.ui.form.on('Client Side Scripting', {
//     enable:function(frm){
//         // frm.set_df_property('first_name','reqd',1)
//         //// frm.refresh_field('first_name');
//         // frm.set_df_property('middle_name','read_only',1)
//         ////frm.refresh_field('middle_name');

//         frm.toggle_reqd('age',true)

//     }
// })


  ///////////////// add_custom_button /////////////////////////
//   frappe.ui.form.on('Client Side Scripting', {
//     refresh:function(frm){
//         //  frm.add_custom_button('Click me Button',() =>{
//         //       frappe.msgprint("You Click Me!!!");
//         // } )

//         frm.add_custom_button('Click Mel',() =>{
//             frappe.msgprint(__('You Clicked 1 !!'));
//       },'click me' )

//         frm.add_custom_button('Click me2n',() =>{
//             frappe.msgprint(__('You Clicked 2!!!'));
//       },'click me' )
//     }
//   })

