<?php

// xslkit

// output functions

  require_once ( 'inc/main.php' ) ;
  require_once ( 'inc/cf.php' ) ;

  function redir_and_die ( $url )
  {

    header ( LOCATION_HEADER . $url ) ;

    die ( ) ;

  }

  function dump_and_die ( $mime , $msg )
  {

    header ( CONTENT_TYPE_HEADER . $mime ) ;

    print ( $msg ) ;

    die ( ) ;

  }

  function dump_xml_and_die ( $msg )
  {

    dump_and_die ( MIME_XML , $msg ) ;

  }

  function dump_html_and_die ( $msg )
  {

    dump_and_die ( MIME_HTML , $msg ) ;

  }

  function croak_and_die ( $msg )
  {

    dump_and_die ( MIME_ERR , $msg ) ;

  }

?>