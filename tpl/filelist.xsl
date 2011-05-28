<?xml version="1.0" encoding="UTF-8"?>

<!-- xslkit -->

<!-- file list transformation (xslt) -->

<xsl:stylesheet
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns="http://www.w3.org/1999/xhtml"
  version="1.0">

  <xsl:output
    method="xml"
    version="1.0"
    encoding="UTF-8"
    doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN"
    doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"/>

  <xsl:param name="file-list"/>

  <xsl:template match="@*|node()">

    <xsl:param name="file"/>

    <xsl:copy>

      <xsl:apply-templates select="@*|node()">

        <xsl:with-param name="file" select="$file"/>

      </xsl:apply-templates>

    </xsl:copy>

  </xsl:template>

  <xsl:template match="*[@class='file']">

    <!-- a bit of unnecessary processing -->
    <!-- this should be handled by php   -->

    <xsl:choose>

      <xsl:when test="$file-list">

        <xsl:variable
          name="cur-file"
          select="substring-before($file-list,' ')"/>
        <xsl:variable
          name="rem-files"
          select="substring-after($file-list,' ')"/>

        <xsl:copy>

          <xsl:attribute
            name="id"><xsl:value-of
                        select="$cur-file"/></xsl:attribute>

          <xsl:apply-templates select="@*|node()">

            <xsl:with-param
              name="file"
              select="$cur-file"/>

          </xsl:apply-templates>

        </xsl:copy>

        <xsl:if test="$rem-files!=''">

          <xsl:apply-templates select="." mode="rec">

            <xsl:with-param
              name="local-file-list"
              select="$rem-files"/>

          </xsl:apply-templates>

        </xsl:if>

      </xsl:when>

      <xsl:otherwise>

        <xsl:text>No suitable files.</xsl:text>

      </xsl:otherwise>

    </xsl:choose>

  </xsl:template>

  <xsl:template match="*[@class='file']" mode="rec">

    <xsl:param name="local-file-list"/>

    <xsl:variable
      name="cur-file"
      select="substring-before($local-file-list,' ')"/>
    <xsl:variable
      name="rem-files"
      select="substring-after($local-file-list,' ')"/>

    <xsl:copy>

      <xsl:attribute
        name="id"><xsl:value-of
                    select="$cur-file"/></xsl:attribute>

      <xsl:apply-templates select="@*|node()">

        <xsl:with-param name="file" select="$cur-file"/>

      </xsl:apply-templates>

    </xsl:copy>

    <xsl:if test="$rem-files!=''">

      <xsl:apply-templates select="." mode="rec">

        <xsl:with-param
          name="local-file-list"
          select="$rem-files"/>

      </xsl:apply-templates>

    </xsl:if>

  </xsl:template>

  <xsl:template match="*[@class='filename']">

    <xsl:param name="file"/>

    <xsl:copy>

      <xsl:apply-templates select="@*|node()">

        <xsl:with-param name="file" select="$file"/>

      </xsl:apply-templates>

      <xsl:attribute
        name="title"><xsl:value-of
                       select="$file"/></xsl:attribute>

      <xsl:value-of select="$file"/>

    </xsl:copy>

  </xsl:template>

</xsl:stylesheet>
