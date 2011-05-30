<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml"/>
  <xsl:template match="@*|node()">
    <xsl:copy>
	  <xsl:apply-templates select="@*|node()"/>
	</xsl:copy>
  </xsl:template>
  <xsl:template match="PRICE">
    <xsl:copy>
	  <xsl:value-of select="text() - 50"/>
	  <xsl:text> - SPECIAL DISCOUNT!</xsl:text>
	</xsl:copy>
  </xsl:template>
</xsl:stylesheet>
