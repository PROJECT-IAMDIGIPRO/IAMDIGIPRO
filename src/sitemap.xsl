<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
      xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:output method="html"/>

    <xsl:template match="/sitemap:urlset">
        <html>
        <head>
            <title>Sitemap</title>
            <style>
                body { font-family: Arial, sans-serif; }
                h1 { color: #f66136; }
                table { width: 100%; border-collapse: collapse; }
                th, td { padding: 10px; border: 1px solid #ddd; }
                th { background-color: #f66136; color: white; }
            </style>
        </head>
        <body>
            <h1>Sitemap</h1>
            <table>
                <tr>
                    <th>URL</th>
                    <th>Last Modified</th>
                    <th>Change Frequency</th>
                    <th>Priority</th>
                </tr>
                <xsl:for-each select="sitemap:url">
                    <tr>
                        <td><xsl:value-of select="sitemap:loc"/></td>
                        <td><xsl:value-of select="sitemap:lastmod"/></td>
                        <td><xsl:value-of select="sitemap:changefreq"/></td>
                        <td><xsl:value-of select="sitemap:priority"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
