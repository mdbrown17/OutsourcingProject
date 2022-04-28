<?php
$connection = mysql_connect("localhost", "root", ""); // Establishing connection with server..
$db = mysql_select_db("college", $connection); // Selecting Database.
$email=$_POST['username1']; // Fetching Values from URL.
$password= sha1($_POST['password1']); // Password Encryption, If you like you can also leave sha1.
// check if e-mail address syntax is valid or not
$email = filter_var($username, FILTER_SANITIZE_EMAIL); // sanitizing email(Remove unexpected symbol like <,>,?,#,!, etc.)
if (!filter_var($username, FILTER_VALIDATE_EMAIL)){
echo "Invalid Username.......";
}else{
// Matching user input email and password with stored email and password in database.
$result = mysql_query("SELECT * FROM registration WHERE username='$username' AND password='$password'");
$data = mysql_num_rows($result);
if($data==1){
echo "Successfully Logged in...";
}else{
echo "Username or Password is wrong...!!!!";
}
}
mysql_close ($connection); // Connection Closed.
?>