<?php

// xslkit

// xml functions

  require_once ( 'inc/main.php' ) ;
  require_once ( 'inc/cf.php' ) ;

  function xform_xml ( $param )
  {
    $doc = DOMDocument :: load ( $param [ 'XML' ] ) ;
    $xform = new XSLTProcessor ( ) ;
    $xform -> importStylesheet
    (
      DOMDocument :: load ( $param [ 'XSL' ] )
    ) ;

    if ( $param [ 'PARAM' ] )
    {
      $xform -> setParameter ( '' , $param [ 'PARAM' ] ) ;
    }

    return
    (
      $xform -> transformToDoc ( $doc ) -> saveXML ( )
    ) ;
  }

?>