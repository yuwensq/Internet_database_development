<!DOCTYPE html> 
<html> 
<body> 

<?php 
$x = 10;
function func() {
    $y = 10 + $GLOBALS['x'];
    echo $y;
}
func();
?> 

</body> 
</html>