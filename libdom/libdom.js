


// libdom.js 0.2.5



  const Const =
  {
    css :
    {
      NO_SHOW : 'noshow'
    }
  } ;



// DOM wrapper functions



  function dom_id ( id )
  {

    return ( document . getElementById ( id ) ) ;

  }



  function dom_el ( tag )
  {

    return ( document . createElement ( tag ) ) ;

  }



  function dom_tag ( el , tag )
  {

    return ( el . getElementsByTagName ( tag ) ) ;

  }



  function dom_sattr ( el , attr , val )
  {

    if ( el )
    {

      return ( el . setAttribute ( attr , val ) ) ;

    }
    else
    {

      return ( false ) ;

    }

  }



  function dom_gattr ( el , attr )
  {

    if ( el )
    {

      return ( el . getAttribute ( attr ) ) ;

    }
    else
    {

      return ( false ) ;

    }

  }



  function dom_add ( dad , add )
  {

    if ( add instanceof Array )
    {

      return ( dom_add_lst ( dad , add ) ) ;

    }
    else
    {

      return ( dad . appendChild ( add ) ) ;

    }

  }



  function dom_add_lst ( dad , adds )
  {

    for ( var i = 0 ; i < adds . length ; i ++ )
    {
      dom_add ( dad , adds [ i ] ) ;
    }

    return ( true ) ;

  }



  function dom_del ( del )
  {

    return ( del . parentNode . removeChild ( del ) ) ;

  }



  function dom_ins ( dad , bef , add )
  {

    return ( dad . insertBefore ( add , bef ) ) ;
//    return ( bef . parentNode . insertBefore ( add , bef ) ) ;

  }



  function dom_is_dsp ( el , val )
  {

    return ( ( el ) && ( el . style ) && ( el . style . display == val ) ) ;

  }



  function dom_dsp ( el , val )
  {

    if ( el instanceof Array )
    {

      return ( dom_dsp_lst ( el , val ) ) ;

    }

    if ( ( el ) && ( el . style ) )
    {

      el . style . display = val ;

      return ( true ) ;

    }
    else
    {

      return ( false ) ;

    }

  }



  function dom_dsp_lst ( els , val )
  {

    for ( var i = 0 ; i < els . length ; i ++ )
    {
      dom_dsp ( els [ i ] , val ) ;
    }

    return ( true ) ;

  }



  function dom_is_tgl ( el , tgl )
  {

    return ( dom_is_dsp ( el , ( tgl ? '' : 'none' ) ) ) ;

  }



  function dom_tgl ( el , tgl )
  {

    if ( el instanceof Array )
    {

      return ( dom_tgl_lst ( el , tgl ) ) ;

    }
    else
    {

      return ( dom_dsp ( el , ( tgl ? '' : 'none' ) ) ) ;

    }

  }



  function dom_tgl_lst ( els , tgl )
  {

    return ( dom_dsp_lst ( els , ( tgl ? '' : 'none' ) ) ) ;

  }



  function dom_is_shown ( el )
  {

    return ( dom_is_tgl ( el , true ) ) ;

  }



  function dom_show ( el )
  {

    if ( el instanceof Array )
    {

      return ( dom_show_lst ( el ) ) ;

    }
    else
    {

      return ( dom_tgl ( el , true ) ) ;

    }

  }



  function dom_show_lst ( els )
  {

    return ( dom_tgl_lst ( els , true ) ) ;

  }



  function dom_is_hidden ( el )
  {

    return ( dom_is_tgl ( el , false ) ) ;

  }



  function dom_hide ( el )
  {

    if ( el instanceof Array )
    {

      return ( dom_hide_lst ( el ) ) ;

    }
    else
    {

      return ( dom_tgl ( el ) ) ;

    }

  }



  function dom_hide_lst ( els )
  {

    return ( dom_tgl_lst ( els , false ) ) ;

  }



  function dom_is_cls ( el , cls )
  {

    return ( ( el ) && ( el . className == cls ) ) ;

  }



  function dom_is_cls_none ( el )
  {

    return ( dom_is_cls ( el , '' ) ) ;

  }



  function dom_is_cls_noshow ( el )
  {

    return ( dom_is_cls ( el , Const . css . NO_SHOW ) ) ;

  }



  function dom_cls ( el , cls )
  {

    if ( el instanceof Array )
    {

      return ( dom_cls_lst ( el , cls ) ) ;

    }

    if ( el )
    {

      el . className = cls ;

      return ( true ) ;

    }
    else
    {

      return ( false ) ;

    }

  }



  function dom_cls_lst ( els , cls )
  {

    for ( var i = 0 ; i < els . length ; i ++ )
    {
      dom_cls ( els [ i ] , cls ) ;
    }

    return ( true ) ;

  }



  function dom_cls_none ( el )
  {

    return ( dom_cls ( el , '' ) ) ;

  }



  function dom_cls_noshow ( el )
  {

    return ( dom_cls ( el , Const . css . NO_SHOW ) ) ;

  }



  function dom_show_none ( el )
  {

    dom_show ( el ) ;
    dom_cls_none ( el ) ;

    return ( true ) ;

  }



  function dom_hide_noshow ( el )
  {

    dom_hide ( el ) ;
    dom_cls_noshow ( el ) ;

    return ( true ) ;

  }



  function dom_is_ro ( el )
  {

    return ( ( el ) && ( el . readOnly ) ) ;

  }



  function dom_ro ( el , val )
  {

    if ( el instanceof Array )
    {

      return ( dom_ro_lst ( el , val ) ) ;

    }

    if ( el )
    {

      el . readOnly = val ;

      return ( true ) ;

    }
    else
    {

      return ( false ) ;

    }

  }



  function dom_ro_lst ( els , val )
  {

    for ( var i = 0 ; i < els . length ; i ++ )
    {
      dom_ro ( els [ i ] , val ) ;
    }

    return ( true ) ;

  }



  function dom_rofy ( el , ro , cls )
  {

    if ( el instanceof Array )
    {

      return ( dom_rofy_lst ( el , ro , cls ) ) ;

    }
    else
    {

      dom_ro ( el , ro ) ;
      dom_cls ( el , cls ) ;

      return ( true ) ;

    }

  }



  function dom_rofy_lst ( els , ro , cls )
  {

    for ( var i = 0 ; i < els . length ; i ++ )
    {
      dom_rofy ( els [ i ] , ro , cls ) ;
    }

    return ( true ) ;

  }



  function dom_is_dsbl ( el )
  {

    return ( ( el ) && ( el . disabled ) ) ;

  }



  function dom_dsbl ( el , val )
  {

    if ( el instanceof Array )
    {

      return ( dom_dsbl_lst ( el , val ) ) ;

    }

    if ( el )
    {

      el . disabled = val ;

      return ( true ) ;

    }
    else
    {

      return ( false ) ;

    }

  }



  function dom_dsbl_lst ( els , val )
  {

    for ( var i = 0 ; i < els . length ; i ++ )
    {
      dom_dsbl ( els [ i ] , val ) ;
    }

    return ( true ) ;

  }



  function dom_is_disabled ( el )
  {

    return ( dom_is_dsbl ( el , true ) ) ;

  }



  function dom_disable ( el )
  {

    if ( el instanceof Array )
    {

      return ( dom_disable_lst ( el ) ) ;

    }
    else
    {

      return ( dom_dsbl ( el , true ) ) ;

    }

  }



  function dom_disable_lst ( els )
  {

    return ( dom_dsbl_lst ( els , true ) ) ;

  }



  function dom_is_enabled ( el )
  {

    return ( dom_is_dsbl ( el , false ) ) ;

  }



  function dom_enable ( el )
  {

    if ( el instanceof Array )
    {

      return ( dom_enable_lst ( el ) ) ;

    }
    else
    {

      return ( dom_dsbl ( el ) ) ;

    }

  }



  function dom_enable_lst ( els )
  {

    return ( dom_dsbl_lst ( els , false ) ) ;

  }



// Several small useful functions.



  function is_in_array ( haystack , needle )
  {

    for ( var i = 0 ; i <= haystack . length ; i ++ )
    {
      if ( haystack [ i ] == needle )
      {

        return ( true ) ;

      }
    }

    return ( false ) ;

  }



  function if_not_elt ( el , def_value )
  {

    return ( el ? el . value : def_value ) ;

  }



  function if_not_elt_blank ( el )
  {

    return ( if_not_elt ( el , '' ) ) ;

  }



  function if_not_elt_zero ( el )
  {

    return ( if_not_elt ( el , 0 ) ) ;

  }


