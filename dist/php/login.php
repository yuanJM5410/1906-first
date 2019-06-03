<?php 
    header('content-type:text/html;charset=utf8');
    include('common/public.php');

    $uName = $_GET['username'];
    $uPwd = $_GET['userpwd'];

    $sql = "select * from camel where username='$uName' ";

    $res = mysqli_query($connect,$sql);

    $arr = mysqli_fetch_assoc($res);

    if($arr){
        echo json_encode(array(
            'state' => '0' ,
            'info' => '用户名已存在，请重新注册'
        ));
    }else{
        $sql2 = "insert into camel (username , userpwd) values ('$uName' , '$uPwd') ";
        mysqli_query($connect,$sql2);
        echo json_encode(array(
            'state' => '1' ,
            'info' => '注册成功，快去登录吧'
        ));
    }
?>