
// xslkit

// client-side scripts (javascript)

// requires libdom.js 0.2.5+

  const CONFIG_FILE = 'cf/xslkit.cf.xml' ;

  var cf = [ ] ;

  function load_cf ( )
  {

    dom_hide ( dom_id ( 'root' ) ) ;

    var http = new XMLHttpRequest ( ) ;

// Weird behavior observed when using GET --
// Firefox uses cached config file?

//    http . open ( 'GET' , CONFIG_FILE , false ) ;

    http . open ( 'POST' , CONFIG_FILE , false ) ;

    http . send ( null ) ;

    var options =
    dom_tag ( http . responseXML , 'option' ) ;

    for ( var ix = 0 ; ix < options . length ; ix ++ )
    {
      var option = options [ ix ] ;
      cf [ dom_gattr ( option , 'name' ) ] =
      dom_gattr ( option , 'value' ) ;
    }

    dom_show ( dom_id ( 'root' ) ) ;

    return ( true ) ;

  }

  function show ( href )
  {

    var frame = dom_id ( 'frame_xml' ) ;

    dom_sattr ( frame , 'src' , href ) ;

    return ( true ) ;

  }

  function xform ( me )
  {

    var dad = me . parentNode . parentNode ;

    return (
      show
      (
        cf . QUERY_STRING_XSLT +
        dad . id
      )
    ) ;

  }

  function show_file ( me , ext )
  {

    var dad = me . parentNode . parentNode ;

    var file =
      cf . DIR_DATA +
      dad . id +
      cf . EXT_DELIM + ext ;

    return ( show ( file ) ) ;

  }

  function show_xml ( me )
  {

    return ( show_file ( me , cf . EXT_XML ) ) ;

  }

  function show_xsl ( me )
  {

    return ( show_file ( me , cf . EXT_XSL ) ) ;

  }
