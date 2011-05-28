<?php

// xslkit

// core logic

  require_once ( 'inc/main.php' ) ;
  require_once ( 'inc/cf.php' ) ;
  require_once ( 'inc/output.php' ) ;
  require_once ( 'inc/file.php' ) ;
  require_once ( 'inc/xml.php' ) ;

  function xslkit_do_and_die ( $param )
  {
    $fn =
      (
        isset ( $param [ 'FILENAME'] )
          ? $param [ 'FILENAME' ]
          : ''
      ) ;

    if ( $fn != '' )
    {
      xslkit_xform_and_die ( $fn ) ;
    }
    else
    {
      xslkit_list_files_and_die ( ) ;
    }
  }

  function xslkit_xform_and_die ( $me )
  {
    // note that check_fn ( ) autocroaks
    // if something's wrong
    if
    (
      check_fn
      (
        $me ,
        array
        (
          'CROAK' => TRUE ,
        )
      )
    )
    {
      check_file
      (
        $xml_fn =
        make_fn
        (
          array
          (
            'NAME' => $me ,
            'EXT' => EXT_XML ,
          )
        ) ,
        array
        (
          'CROAK' => TRUE ,
        )
      ) ;
      check_file
      (
        $xsl_fn =
        make_fn
        (
          array
          (
            'NAME' => $me ,
            'EXT' => EXT_XSL ,
          )
        ) ,
        array
        (
          'CROAK' => TRUE ,
        )
      ) ;

      $xml_xformed =
      xform_xml
      (
        array
        (
          'XML' => $xml_fn ,
          'XSL' => $xsl_fn ,
          'PARAM' => FALSE ,
        )
      ) ;

      dump_xml_and_die ( $xml_xformed ) ;
    }
  }

  function xslkit_list_files_and_die ( )
  {
    $file_list = get_file_list ( FILE_LIST_MASK ) ;

    $html =
    xform_xml
    (
      array
      (
        'XML' => FILE_LIST_HTML ,
        'XSL' => FILE_LIST_XSL ,
        'PARAM' =>
          array
          (
            FILE_LIST_XSL_PARAM => $file_list ,
          ) ,
      )
    ) ;

    dump_html_and_die ( $html ) ;
  }

?>