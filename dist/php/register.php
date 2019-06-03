<?php 
    header('content-type:text/html;charset=utf8');
    include('common/public.php');

    //接收前端传递过来的数据
    $uname = $_GET['username'] ;
    // $uname = 'yjm' ;
    $upwd = $_GET['userpwd'];

    // echo $uname;

    $sql = "select * from camel where username= '$uname' ";
    // $sql = "select * from information where username = '$uname' "

    $res = mysqli_query($connect,$sql);

    $arr = mysqli_fetch_assoc($res);

    if($arr){
        //如果账号一致，那么开始验证密码是否一致
        $sql2 = "select * from camel where userpwd='$upwd' " ;

        $res2 = mysqli_query($connect,$sql2) ;

        $arr2 = mysqli_fetch_assoc($res2) ;

        if($arr2){
            echo json_encode(array(
                'state' => '1' ,
                'info' => '登录成功'
            ));
        }else{
            echo json_encode(array(
                'state' => '0' ,
                'info' => '密码不正确，请重新输入！'
            ));
        }
    }else{
        echo json_encode(array(
            'state' => '0' ,
            'info' => '账号不存在，请重新输入！'
        ));
    }

?>