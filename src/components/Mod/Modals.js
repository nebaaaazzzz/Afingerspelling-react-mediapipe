// import Swal from 'sweetalert2/dist/sweetalert2.js'
import Swal from 'sweetalert2'
import "./Modals.css"


let timerInterval
function Modals (){
	
  
 

Swal.fire({
	
  
  title: 'amazing job!',
  html: 'next word is <b></b>',
   

  
  didOpen: () => {
    Swal.showLoading()
  
  },
 
}).then ((result) => {
  /* Read more about handling dismissals below */

});}


	

export default Modals
