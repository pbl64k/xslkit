<?php

// xslkit

// file functions

  require_once ( 'inc/main.php' ) ;
  require_once ( 'inc/cf.php' ) ;
  require_once ( 'inc/output.php' ) ;

  function strip_fn_ext ( $fn )
  {
    $frag = explode ( EXT_DELIM , $fn ) ;
    array_pop ( $frag ) ;
    return ( implode ( EXT_DELIM , $frag ) ) ;
  }

  function strip_fn_dir ( $fn )
  {
// BUG -- must escape DIR_DATA before replacing
    return
    (
      preg_replace
      (
        DIR_STRIP_REGEXP_START .
        DIR_DATA .
        DIR_STRIP_REGEXP_END ,
        '' ,
        $fn
      )
    ) ;
  }

  function make_fn ( $fn )
  {
    return
    (
      DIR_DATA . $fn [ 'NAME' ] . EXT_DELIM . $fn [ 'EXT' ]
    ) ;
  }

  function checker ( $param )
  {
    if ( $param [ 'COND' ] )
    {
      return ( TRUE ) ;
    }
    if ( $param [ 'CROAK' ] )
    {
      croak_and_die ( $param [ 'MSG' ] ) ;
    }

    return ( FALSE ) ;
  }

  function &auto_croak_opt ( &$opt )
  {
    if ( ! isset ( $opt [ 'CROAK' ] ) )
    {
      $opt [ 'CROAK' ] = TRUE ;
    }

    return ( $opt ) ;
  }

  function check_fn ( $name , $opt = array ( ) )
  {
    auto_croak_opt ( $opt ) ;

    return
    (
      checker
      (
        array
        (
          'COND' =>
            preg_match ( VALID_FN_REGEXP , $name ) ,
          'CROAK' => $opt [ 'CROAK' ] ,
          'MSG' => ERR_INV_FN . $name ,
        )
      )
    ) ;
  }

  function check_file ( $name , $opt = array ( ) )
  {
    auto_croak_opt ( $opt ) ;

    return
    (
      checker
      (
        array
        (
          'COND' => file_exists ( $name ) ,
          'CROAK' => $opt [ 'CROAK' ] ,
          'MSG' => ERR_NOT_FOUND . $name ,
        )
      )
    ) ;
  }

  function get_file_list ( $mask )
  {
    $result = '' ;

    if
    (
      !
        $list =
        glob
        (
          make_fn
          (
            array
            (
              'NAME' => $mask ,
              'EXT' => EXT_XML ,
            )
          )
        )
    )
    {
      croak_and_die ( ERR_NO_FILES ) ;
    }

    foreach ( $list as $file )
    {
      $fn = strip_fn_ext ( strip_fn_dir ( $file ) ) ;

      if
      (
        check_fn
        (
          $fn ,
          array
          (
            'CROAK' => FALSE ,
          )
        )
        &&
        check_file
        (
          make_fn
          (
            array
            (
              'NAME' => $fn ,
              'EXT' => EXT_XSL ,
            )
          ) ,
          array
          (
            'CROAK' => FALSE ,
          )
        )
      )
      {
        $result .= $fn . FILE_LIST_XSL_PARAM_DELIM ;
      }
    }

    if ( ! $result )
    {
      croak_and_die ( ERR_NO_FILES ) ;
    }

    return ( $result ) ;
  }

?>