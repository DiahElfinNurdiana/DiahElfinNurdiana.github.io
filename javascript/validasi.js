console.log("validasi.js Terhubung");
var pass = document.getElementById("password");
var tanggapan = document.getElementById("tanggapan");
function validate(){
  if(pass.value.length<=8){
    tanggapan.innerHTML = "Password harus 8 karakter";
  }else{
    tanggapan.innerHTML = '';
  }
}
