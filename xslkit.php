<?php

// xslkit

// main page (php)

  require_once ( 'inc/main.php' ) ;
  require_once ( 'inc/cf.php' ) ;
  require_once ( 'inc/core.php' ) ;

  xslkit_do_and_die
  (
    array
    (
      'FILENAME' =>
        (
          isset ( $_GET [ PARAM_FN ] )
            ? $_GET [ PARAM_FN ]
            : ''
        ) ,
    )
  ) ;

?>