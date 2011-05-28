<?php

// xslkit

// xml config functions

// requires libdom.php5.php 0.2.5+

  require_once ( 'inc/main.php' ) ;

  require_once ( 'libdom/libdom.php5.php' ) ;

  function die_horribly ( $msg = 'FATAL ERROR' )
  {
    die ( $msg ) ;
  }

  function load_cf ( $fn = '' )
  {

    if ( ! $fn )
    {
      if ( defined ( 'CONFIG_FILE' ) )
      {
        $fn = CONFIG_FILE ;
      }
      else
      {
        // if we don't even have a configuration file
        // specified, we can't possibly abort gracefully
        die_horribly
        (
          'FATAL ERROR: configuration file not specified'
        ) ;
      }
    }

    $cf_doc = DOMDocument :: load ( $fn ) ;

    foreach
    (
      dom_tag ( $cf_doc , 'option' ) as $option
    )
    {
      define
      (
        dom_gattr ( $option , 'name' ) ,
        dom_gattr ( $option , 'value' )
      ) ;
    }

    return ( TRUE ) ;

  }

  load_cf ( ) ;

?>