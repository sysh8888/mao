<?php
$date=date('Y-m-d',time());
$lei= $_POST["lei"];
$file="./".$lei."/".$lei.".txt";
if($_POST["tijiao"]=="doAdd"){
$myfile = fopen($file, "a") or die("Unable to open file!");
$txt = $_POST['http'].",".$date.",".$_POST['beizhu']."\n";
fwrite($myfile, $txt);
fclose($myfile);
echo '<script>alert("提交成功！");window.location.href="./'.$lei.'jie.html"</script>';
}else{echo '<script>alert("提交错误！");window.location.href="./'.$lei.'jie.html"</script>';
	};
?>
